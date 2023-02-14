// короткий путь между двумя узлами
MATCH p=shortestPath((a:Person {name: "Emil Eifrem"})-[*]-(b:Person {name: "Taylor Hackford"}))
RETURN p


// показывает уровень связей от узла определенного узла (значение задать в properities{})
match (a{name:"Taylor Hackford"})-[r*1..3]-(b) return a,b,r
// same things
match p=(a{name:"Taylor Hackford"})-[r*1..3]-(b) return p