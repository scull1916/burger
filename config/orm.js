//Import MySql connection
var connection = require("../config/connection.js");

//Helper function for MySql
function printQuestionMarks(num)
{
	var arr = [];

	for (i=0; i<num; i++)
	{
		array.push("?");
	}

	return arr.toString();
}

//Helper function to convert key/vaule pairs to SQL syntax
function objToSql(obj)
{
	var arr = [];

	//loop through the array and push the key/value as a string into arr
	for (var key in ob)
	{
		var value = ob[key];
		//check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key))
		{
			//if string with spaces, add quotations
			if (typeof value === "string" && value.indexOf(" ") >= 0)
			{
				value = "'" + value + "'";
			}

			//this will result in e.g. {sleepy:true} => ["sleepy=true"]
			arr.push(key + "=" + value);
		}
	}

	//translate array of strings to a single comma separated string
	return arr.toString();
}

//Object for all SQL statement functions
var orm =
{
	all: function(tableInput, cb)
	{
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result)
		{
			if (err)
				{ 
					throw err;
				}

			cb(result);
		});
	},

	create: function(tables, cols, vals, cb)
	{
		var queryString = "INSERT INTO " + table;

		queryString += "(";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result)
		{
			if (err)
			{
				throw err;
			}

			cb(result);
		});
	},

	//an example of objColVals would be {name: panther, sleepy: true}
	update: function(table, objColVals, condition, cb)
	{
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result)
			{
				if (err)
				{
					throw err;
				}

				cb(result);
			});
	},

	delete: function(table, condition, cb)
	{
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result)
		{
			if (err)
			{
				throw err;
			}

			cb(result);
		});

	}
};

module.exports = orm;