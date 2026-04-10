export function pluck(path: string| string[], array: any[]){
    const getValue=(obj:any, path:string)=>{
        return path.split('.').reduce((acc,key)=>acc?.[key],obj);
    };
    return array.map(item=>)
}