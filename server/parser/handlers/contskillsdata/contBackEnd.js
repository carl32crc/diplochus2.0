function getNumSkillsDb(item,rankingDb,index2,subItem){

	if(item==='SQL'&& rankingDb[index2][subItem].name ==="SQL"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='MYSQL'&& rankingDb[index2][subItem].name ==="MySQL"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='NODE' && rankingDb[index2][subItem].name ==="Node"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='EXPRESS' && rankingDb[index2][subItem].name ==="Express"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='DJANGO' && rankingDb[index2][subItem].name ==="Django"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='SQLITE' && rankingDb[index2][subItem].name ==="sQlite"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='MONGODB' && rankingDb[index2][subItem].name ==="MongoDb"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='COUCHDB' && rankingDb[index2][subItem].name ==="CouchDB"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='REDIS' && rankingDb[index2][subItem].name ==="Redis"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='CASSANDRA' && rankingDb[index2][subItem].name ==="Cassandra"){
		rankingDb[index2][subItem].num++;
	}
	if(item==='RUBY' && rankingDb[index2][subItem].name ==="Ruby"){
		rankingDb[index2][subItem].num++;
	}

	return rankingDb[index2][subItem].num;
}

module.exports = getNumSkillsDb;