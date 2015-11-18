myGrocery.service('ItemsService', function(){
   this.itemName = function (){
      console.log('item Name');
   };

});

myGrocery.factory('ItemsFactory', function(){
	return $firebaseObject.$extend({
		getContentInline : function(){
			return this.name + '-' + this.quantit;
		}
	}); 
	// return{
	// 	getItemName: function(){
	//  	console.log('Item Name');
	// 	};
	// }
});

myGrocery.factory('Item', function($firebaseObject, $firebaseArray){
	var fireRef = new Firebase('https://grocery-store.firebaseio.com/items');
	return {
		getAllitems: function(){
           return $firebaseArray(fireRef);
		}
	};
})