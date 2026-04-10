function get(obj:any,path:string[]){
    let result=obj;
    for(let key of path){
        if(result[key]==null)return undefined;
        result=result[key];
    }
    return result;
}
function setDeep(obj:any,path:string[],value:any):any{
    if(path.length===0)return value;
    const [head, ...rest]=path;
    return{
        ...obj,
        [head]:setDeep(obj?obj[head]:undefined,rest,value)
    };
}
export function lens(path:string){
    return path.split('.');
}

export function view(lensPath:string[],obj:any){
    return get(obj,lensPath);
}

export function set(lensPath:string[],value:any,obj:any){
    return setDeep(obj,lensPath,value);
}