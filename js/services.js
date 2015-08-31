angular.module('starter.services', [])
.factory('Fruits', function(){
	var fruits = [
			{
				id : 1,
				type : '제철과일',
				name : '상주 참외(10kg)',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 700,
				each_unit: '개',
				bundle : {
					number : 30,
					unit: '상자',
					},	
				img: 'img/koreanmelon.jpg' 
			},{
				id : 2,
				type : '제철과일',
				name : '포도(5kg)',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 1700,
				each_unit: '송이',
				bundle : {
					number : 12,
					unit: '상자',
					},
				img: 'img/grapes.jpg' 
			},{
				id : 3,
				type : '제철과일',
				name : '수박',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 18000,
				each_unit: '덩이',
				img: 'img/watermelon.jpg' 
			},{
				id : 4,
				type : '하우스과일',
				name : '딸기',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 3000,
				each_unit: 'pack',
				img: 'img/strawberries.jpeg' 
			
			},{
				id : 5,
				type : '하우스과일',
				name : '사과(10kg)',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 1000,
				each_unit: '개',
				bundle : {
					number : 30,
					unit: '상자',
					},
				img: 'img/apples.jpeg' 
			},{
				id : 6,
				type : '하우스과일',
				name : '방울토마토(500g)',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 5000,
				each_unit: 'pack',
				img: 'img/cherrytomato.jpeg' 
			},{
				id : 7,
				type : '수입과일',
				name : '태국 망고(2kg)',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 5000,
				each_unit: '개',
				bundle : {
					number : 4,
					unit: '상자',
					},
				img: 'img/mango.png' 
			
			},{
				id : 8,
				type : '수입과일',
				name : '오렌지(700g)',
				description: '이번 가을에 출하된 참외입니다. 달고 신선해요! 좋은 놈만 골라 드립니다!',
				price : 1000,
				each_unit: '개',
				bundle : {
					number : 5,
					unit: '상자',
					},
				img: 'img/oranges.jpg' 
			
			}
	];
	return {
		sortByType: function(){
			var ob = {};
			for(var i = 0; i < fruits.length ; i++){
				var fruit = fruits[i];
				if(typeof ob[fruit.type] === 'undefined') ob[fruit.type] = [];
				ob[fruit.type].push(fruit);	
			}
			return ob;
		},
		get: function(id){
			for(var i = 0; i < fruits.length ; i++){
				if(fruits[i].id == id) return fruits[i];
			}
		},
		
	
	};

})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
