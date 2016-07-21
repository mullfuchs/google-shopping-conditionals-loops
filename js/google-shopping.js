var data = require('../products.json');

// Write your solutions below
var itemCount = 0;
for(var i = 0; i < data['items'].length; i++){
	if(data['items'][i]['kind'] == "shopping#product"){
		//itemCount++;
	}

	if(data.items[i].product.inventories[0].availability == "backorder"){
		//console.log(data.items[i].product.title, " on backorder");
	}

	if(data.items[i].product.images.length > 1){
		//console.log(data.items[i].product.title, "has multiple images");	
	}

	if(data.items[i].product.brand == "Canon"){
		//console.log(data.items[i].product.title);	
	}

	if(data.items[i].product.author.name == "eBay"){
		if(data.items[i].product.brand == "Canon"){
			//console.log(data.items[i].product.title);			
		}
	}

	console.log(data.items[i].product.brand);
	console.log("$",data.items[i].product.inventories[0].price);
	console.log(data.items[i].product.images[0].link);

}

console.log("Item count via json field" , data.currentItemCount);

//console.log(data.items);
