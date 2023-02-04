// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
    const entries = Object.entries(employees);

    let moreTasks = 0;
    let leader = 0;

    for (const entry of entries) {
        // console.log(entry);
        const [name, tasks] = entry;
        if (tasks > moreTasks) {
            moreTasks = tasks;
            leader = name;
            
            
        } 
    } return leader;
    
}

//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

