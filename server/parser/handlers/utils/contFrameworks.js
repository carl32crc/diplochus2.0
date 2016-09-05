function getNumFrameworks(ranking,itemSkill){

	ranking._frameworks.forEach(function(itemName,i){

		if((itemSkill==='ANGULAR' || itemSkill==='ANGULARJS') && itemName.name ==="Angular"){
			itemName.num++;
		}
		if((itemSkill==='REACT' || itemSkill==='REACTJS')  && itemName.name ==="React"){
			itemName.num++;
		}
		if(itemSkill==='LARAVEL' && itemName.name ==="Laravel"){
			itemName.num++;
		}
		if(itemSkill==='IONIC' && itemName.name ==="Ionic"){
			itemName.num++;
		}
		if(itemSkill==='DJANGO' && itemName.name ==="Django"){
			itemName.num++;
		}
		if(itemSkill==='RUBY' && itemName.name ==="Ruby on Rails"){
			itemName.num++;
		}
		if(itemSkill==='SYMFONY' && itemName.name ==="Symfony"){
			itemName.num++;
		}
		if((itemSkill==='SPRINGMVC' || (itemSkill==='SPRING')) && itemName.name ==="SpringMVC"){
			itemName.num++;
		}
		if(itemSkill==='JSP' && itemName.name ==='JSP'){
			itemName.num++;
		}
		if(itemSkill==='NET' && itemName.name ===".NET"){
			itemName.num++;
		}
		if((itemSkill==='BACKBONE' || itemSkill==='BACKBONEJS') && itemName.name ==="BackBone"){
			itemName.num++;
		}

	});


}

module.exports = getNumFrameworks;