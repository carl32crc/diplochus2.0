function getNumSkillsDb(ranking,itemSkill){

	var itemNum = ranking._numOffers.forEach(function(itemName,i){

		if(itemSkill==='SQL'&& itemName.name ==="SQL"){
			itemName.num++;
		}
		if(itemSkill==='MYSQL'&& itemName.name ==="MySQL"){
			itemName.num++;
		}
		if(itemSkill==='NODE' && itemName.name ==="Node"){
			itemName.num++;
		}
		if(itemSkill==='EXPRESS' && itemName.name ==="Express"){
			itemName.num++;
		}
		if(itemSkill==='DJANGO' && itemName.name ==="Django"){
			itemName.num++;
		}
		if(itemSkill==='SQLITE' && itemName.name ==="sQlite"){
			itemName.num++;
		}
		if(itemSkill==='MONGODB' && itemName.name ==="MongoDb"){
			itemName.num++;
		}
		if(itemSkill==='COUCHDB' && itemName.name ==="CouchDB"){
			itemName.num++;
		}
		if(itemSkill==='REDIS' && itemName.name ==="Redis"){
			itemName.num++;
		}
		if(itemSkill==='CASSANDRA' && itemName.name ==="Cassandra"){
			itemName.num++;
		}
		if(itemSkill==='RUBY' && itemName.name ==="Ruby"){
			itemName.num++;
		}

		return itemName.num;

		});

	return itemNum;

}

module.exports = getNumSkillsDb;