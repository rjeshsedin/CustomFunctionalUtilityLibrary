  

#  Custom Functional Utility Library

  

A production-grade, zero-dependency TypeScript library focused on immutability, type safety, and functional optics.

  

##  1. Foundation

  

These functions replace the native `Array.prototype` methods using custom iteration logic to ensure immutability.

  

###  map

  

Transforms every element in the array.

  

  ```typescript

  import  { map }  from  'customLib';

    

    const  nums  =  [1,  2,  3];

    const  doubled  =  map(x  => x *  2, nums);  // [2, 4, 6]
    
  

```

  

###  filter

  

Returns a new array containing only elements that pass the predicate.

  

```typescript

const  users  =  [{  name:  'Vishnu',  active:  true  },  {  name:  'Guest',  active:  false  }];

const  activeUsers  =  filter(u  => u.active, users);

  

```

  

###  reduce / reduceRight

  

Boils an array down to a single value. `reduceRight` processes from the end.

  

```typescript

// reduce: Left-to-Right

const  subtract  =  reduce((acc,  val)  => acc - val,  100,  [10,  5]);

// (100 - 10) - 5 = 85

  

// reduceRight: Right-to-Left

const  subtractRight  =  reduceRight((acc,  val)  => acc - val,  100,  [10,  5]);

// (100 - 5) - 10 = 85 (Math order)

// Best for: Functional composition where the last function should run first.

const  compose  =  reduceRight((val,  fn)  =>  fn(val),  5,  [x  =>  x  +  1,  x  =>  x  *  2]);

// x * 2 first (10), then + 1 = 11

  

```

  

###  some / every

  

`some` returns true if any element matches; `every` returns true only if all match.

  

```typescript

const  hasAdmin  =  some(user  => user.role  ===  'admin', users);

const  allValid  =  every(val  => val >  0,  [1,  2,  3]);

  

```

  
  
  

##  2. Search (Polymorphic Find)

  

A single function that handles three distinct search signatures through an internal runtime dispatcher.

  

```typescript

// 1. Find by Predicate

find(users,  user  => user.id  ===  1);

  

// 2. Find by Key-Value pair

find(users,  'username',  'vishnu_dev');

```

  
  

##  3. Extraction (Polymorphic Pluck)

  

Extracts data based on property names, deep paths, or multiple keys.

  

```typescript

const  data  =  [

{  id:  1,  info:  {  email:  'v@test.com'  },  tags:  ['dev']  },

{  id:  2,  info:  {  email:  'a@test.com'  },  tags:  ['hr']  }

];

  

// 1. Simple Property

pluck('id', data);  // [1, 2]

  

// 2. Deep Path (Dot Notation)

pluck('info.email', data);  // ['v@test.com', 'a@test.com']

  

// 3. Multi-Key Picker

pluck(['id',  'tags'], data);  // [{id: 1, tags: ['dev']}, {id: 2, tags: ['hr']}]

  

```

  
  

##  4. Optics (Lens)

  

A Lens allows you to "focus" on a specific part of a data structure to view or update it without mutating the original object.

  

```typescript

import  { lens,  view,  set }  from  'customLib';

  

const  user  =  {

id:  1,

profile:  {

settings:  {  theme:  'light'  }

}

};

  

// Create a lens for a deep path

const  themeLens  =  lens('profile.settings.theme');

  

// View value

const  currentTheme  =  view(themeLens, user);  // 'light'

  

// Update value (Returns a fresh object reference)

const  updatedUser  =  set(themeLens,  'dark', user);

  

console.log(user.profile.settings.theme);  // 'light' (Original unchanged)

console.log(updatedUser.profile.settings.theme);  // 'dark' (New reference)

```

## Testing Requirements

-   **100% Branch Coverage**: Every logical path (especially inside your dispatchers) must be tested.
    
-   **Zero-Mutation Verification**: You must write tests that explicitly check if the input array or object remains unchanged after the function runs.
    
-   **Edge Case Handling**: Tests must cover empty arrays, `null`/`undefined` inputs, and deeply nested objects for the `lens` and `pluck` utilities.
  

##  Technical Specifications

-  **Immutability**: The library should avoid any side effects by ensuring no use of `push`, `pop`, or direct variable assignment to input data.

-  **Type Safety**: 100% Generic. The implementation provides full IDE IntelliSense for nested paths, shapes, and complex object structures.

-  **SemVer**: All releases follow strict Semantic Versioning (`MAJOR.MINOR.PATCH`) standards to ensure ecosystem stability.

## Deployment & Optimization

-   **Tree-Shaking**: Export every function individually. Do not wrap them in a single class or default object.
    
-   **Verification**: Before the final submission, use [pkg-size.dev](https://pkg-size.dev/) to check your package's impact. A library this focused should be "virtually invisible" to the bundle size.
    
-   **Type Definitions**: Ensure the `package.json` has a `"types"` or `"typings"` field pointing to your generated `.d.ts` file so I get full IntelliSense in any project.
    
-   **Publishing**: Use **SemVer**. Start with `1.0.0`. If they find a bug and fix it, it becomes `1.0.1`.