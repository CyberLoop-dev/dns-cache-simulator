export class DNSCache {
  constructor(capacity=5){if(!Number.isInteger(capacity)||capacity<1)throw new Error("Capacity must be a positive integer.");this.capacity=capacity;this.now=0;this.clock=0;this.store=new Map();}
  normalize(name){const value=String(name).trim().replace(/\.$/,"").toLowerCase();if(!value||value.length>253||!value.includes(".")||!/^[a-z0-9.-]+$/.test(value))throw new Error("Enter a valid dotted hostname.");return value;}
  resolve(name,{ttl=30,value="203.0.113.10",negative=false}={}){const key=this.normalize(name);if(!Number.isFinite(ttl)||ttl<0)throw new Error("TTL must be a non-negative number.");this.store.delete(key);if(ttl===0)return {cached:false,key,reason:"TTL is zero; record was not cached."};if(this.store.size>=this.capacity){const oldest=[...this.store.entries()].sort((a,b)=>a[1].used-b[1].used)[0];this.store.delete(oldest[0]);}
    const entry={key,value:String(value),negative:Boolean(negative),expiresAt:this.now+ttl,used:++this.clock};this.store.set(key,entry);return {cached:true,...entry,remaining:ttl};}
  lookup(name){const key=this.normalize(name),entry=this.store.get(key);if(!entry)return {hit:false,key};if(entry.expiresAt<=this.now){this.store.delete(key);return {hit:false,key,expired:true};}entry.used=++this.clock;return {hit:true,...entry,remaining:entry.expiresAt-this.now};}
  advance(seconds){if(!Number.isFinite(seconds)||seconds<0)throw new Error("Time advance must be non-negative.");this.now+=seconds;for(const [key,item] of this.store)if(item.expiresAt<=this.now)this.store.delete(key);return this.now;}
  clear(){this.store.clear();}
  entries(){return [...this.store.values()].map(x=>({...x,remaining:Math.max(0,x.expiresAt-this.now)})).sort((a,b)=>a.key.localeCompare(b.key));}
}
