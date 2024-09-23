
import {Parser} from 'node-sql-parser';

const parser = new Parser();
const ast = parser.astify('SELECT A.id, B.name from (select id, gender from T1) A, B where A.id = B.Id'); 


console.log(ast)