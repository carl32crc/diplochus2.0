function getNumDbaseProvince(ranking,itemSkill,provin){

	var provinLang=provin+'Db';

	ranking.provinces.forEach(function(itemName,i){

		if(provin===itemName.province){

			itemName[provinLang].forEach(function(itemName,i){

				if(itemSkill==='ORACLE'&& itemName.name ==="Oracle"){
					itemName.num++;
				}
				if(itemSkill==='MYSQL'&& itemName.name ==="MySQL"){
					itemName.num++;
				}
				if(itemSkill==='ACCESS' && itemName.name ==="Microsoft Access"){
					itemName.num++;
				}
				if(itemSkill==='POSTGRESQL' && itemName.name ==="PostgreSQL"){
					itemName.num++;
				}
				if(itemSkill==='SYBASE' && itemName.name ==="Sybase"){
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
				if(itemSkill==='DB2' && itemName.name ==="DB2"){
					itemName.num++;
				}
			});
		}
	});

}

module.exports = getNumDbaseProvince;