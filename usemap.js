let coll=new Map();
coll.set("bread",1000);
coll.set("whiskey",200);
coll.set("water",1000);
console.log(coll);
coll.set("water",2000);
coll.delete("whiskey");
console.log(coll.get("water"));
//By for-of
for (let [key, value] of coll.entries()) {
    console.log(key + ' - ' + value);
}
