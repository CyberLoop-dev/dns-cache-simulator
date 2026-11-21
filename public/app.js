import {DNSCache} from "./cache.js";
const cache=new DNSCache(6);const $=s=>document.querySelector(s);const log=$("#log");
function line(text,kind=""){const el=document.createElement("p");el.className="logline "+kind;el.textContent=text;log.prepend(el);}
function render(){const body=$("#records");body.replaceChildren();for(const e of cache.entries()){const tr=document.createElement("tr");for(const v of [e.key,e.negative?"NXDOMAIN":e.value,e.remaining.toFixed(1)+"s",e.negative?"Negative":"Positive"]){const td=document.createElement("td");td.textContent=v;tr.append(td);}body.append(tr);}$("#clock").textContent=cache.now.toFixed(1)+"s";}
$("#resolve").addEventListener("click",()=>{try{const r=cache.resolve($("#host").value,{ttl:Number($("#ttl").value),value:$("#value").value,negative:$("#negative").checked});line(r.cached?"Cached "+r.key+" for "+r.remaining+"s":r.reason,"good");render();}catch(e){line(e.message,"bad");}});
$("#lookup").addEventListener("click",()=>{try{const r=cache.lookup($("#host").value);line(r.hit?(r.negative?"Negative cache hit for ":"Cache hit for ")+r.key+" ("+r.remaining.toFixed(1)+"s left)":"Cache miss for "+r.key+(r.expired?" (expired)":""),r.hit?"good":"bad");render();}catch(e){line(e.message,"bad");}});
$("#advance").addEventListener("click",()=>{try{cache.advance(Number($("#seconds").value));line("Virtual clock advanced. Expired records were removed.");render();}catch(e){line(e.message,"bad");}});
$("#clear").addEventListener("click",()=>{cache.clear();line("Cache cleared.");render();});
cache.resolve("docs.example.test",{ttl:30,value:"192.0.2.10"});cache.resolve("missing.example.test",{ttl:12,negative:true,value:"NXDOMAIN"});render();
