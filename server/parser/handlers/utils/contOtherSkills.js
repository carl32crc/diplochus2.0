function getNumOtherSkills(ranking,itemSkill){

	ranking._othersskills.forEach(function(itemName,i){

		if(itemSkill==='WORDPRESS' && itemName.name ==="Wordpress"){
			itemName.num++;
		}
		if(itemSkill==='JOOMLA'  && itemName.name ==="Joomla"){
			itemName.num++;
		}
		if(itemSkill==='PRESTASHOP' && itemName.name ==="Prestashop"){
			itemName.num++;
		}
		if(itemSkill==='MAGENTO' && itemName.name ==="Magento"){
			itemName.num++;
		}
		if(itemSkill==='DRUPAL' && itemName.name ==="Drupal"){
			itemName.num++;
		}
		if(itemSkill==='JQUERY' && itemName.name ==="jQuery"){
			itemName.num++;
		}
		if(itemSkill==='BOOTSTRAP' && itemName.name ==="Bootstrap"){
			itemName.num++;
		}
		if(itemSkill==='LESS' && itemName.name ==="LESS"){
			itemName.num++;
		}
		if(itemSkill==='SASS' && itemName.name ==='SASS'){
			itemName.num++;
		}
		if((itemSkill==='APIS' || itemSkill==='API') && itemName.name ==="APIs"){
			itemName.num++;
		}
		if(itemSkill==='FOUNDATION' && itemName.name ==="Foundation"){
			itemName.num++;
		}

	});


}

module.exports = getNumOtherSkills;