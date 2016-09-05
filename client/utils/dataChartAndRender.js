angular.module("myChartCreate")
	.factory('getDataAndRender', function () {

		function getDataRankingLanguages(data){
				var pos1=parseFloat(data[0]._fivePosLang.positionOne);
				var pos2=parseFloat(data[0]._fivePosLang.positionTwo);
				var pos3=parseFloat(data[0]._fivePosLang.positionThree);
				var pos4=parseFloat(data[0]._fivePosLang.positionFour);
				var pos5=parseFloat(data[0]._fivePosLang.positionFive);

				valuesOfFrontEnd = [[pos5],[pos4],[pos2],[pos1],[pos3]];

			return valuesOfFrontEnd;
		}

		function getDataRankingDb(data){
				var pos1Db=parseFloat(data[0]._fivePosBack.positionOne);
				var pos2Db=parseFloat(data[0]._fivePosBack.positionTwo);
				var pos3Db=parseFloat(data[0]._fivePosBack.positionThree);
				var pos4Db=parseFloat(data[0]._fivePosBack.positionFour);
				var pos5Db=parseFloat(data[0]._fivePosBack.positionFive);

				valuesOfDataBase = [[pos2Db],[pos1Db],[pos3Db],[pos4Db],[pos5Db]];

			return valuesOfDataBase;
		}

		function getDataRankingFrameworks(data){
				var pos1Frame=parseFloat(data[0]._fivePosFrameworks.positionOne);
				var pos2Frame=parseFloat(data[0]._fivePosFrameworks.positionTwo);
				var pos3Frame=parseFloat(data[0]._fivePosFrameworks.positionThree);
				var pos4Frame=parseFloat(data[0]._fivePosFrameworks.positionFour);
				var pos5Frame=parseFloat(data[0]._fivePosFrameworks.positionFive);

				valuesOfFrameworks = [[pos1Frame],[pos2Frame],[pos3Frame],[pos4Frame],[pos5Frame]];

			return valuesOfFrameworks;
		}

		function getDataRankingOtherSkills(data){
				var pos1Other=parseFloat(data[0]._fivePosOtherSkills.positionOne);
				var pos2Other=parseFloat(data[0]._fivePosOtherSkills.positionTwo);
				var pos3Other=parseFloat(data[0]._fivePosOtherSkills.positionThree);
				var pos4Other=parseFloat(data[0]._fivePosOtherSkills.positionFour);
				var pos5Other=parseFloat(data[0]._fivePosOtherSkills.positionFive);

				valuesOfOther = [[pos1Other],[pos2Other],[pos3Other],[pos4Other],[pos5Other]];

			return valuesOfOther;
		}

		return{
			getDataRankingLanguages : getDataRankingLanguages,
			getDataRankingDb : getDataRankingDb,
			getDataRankingFrameworks : getDataRankingFrameworks,
			getDataRankingOtherSkills : getDataRankingOtherSkills
		};
});