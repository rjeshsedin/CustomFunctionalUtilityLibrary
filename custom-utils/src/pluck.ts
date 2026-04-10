function getDeep(obj:any,path:string){
    const keys=path.split('.');
    let result=obj;
    for(let key of keys){
        if(result[key]===undefined){
            return undefined;
        }
        result=result[key];
    }
    return result;
}
export function pluck<T>(key:string|string[],array:T[]):any[]{
    const result:any[]=[];
    for(let i=0;i<array.length;i++){
        if(Array.isArray(key)){
            const obj:any={};
            for(let k of key){
                obj[k]=getDeep(array[i],k);
            }
            result[result.length]=obj;
        }
        else{
            result[result.length]=getDeep(array[i],key);
        }
    }
    return result;
}