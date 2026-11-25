var data = [
{
    title: "Массивы и методы",
    nick: "arrays",
    avatar: "/images/arrays.jpeg",
    desc: "Цепочки методов map, filter, reduce — сердце функционального стиля в JS.",
    code: "const users = [\n  { name: 'Аня', age: 25, active: true },\n  { name: 'Борис', age: 17, active: false },\n  { name: 'Вика', age: 30, active: true }\n];\n\nconst adultNames = users\n  .filter(u => u.active && u.age >= 18)\n  .map(u => u.name.toUpperCase())\n  .join(', ');\n\nconsole.log(adultNames); // \"АНЯ, ВИКА\""
},
{
    title: "Замыкания",
    nick: "closures",
    avatar: "/images/closures.png",
    desc: "Функция «запоминает» своё лексическое окружение — основа для модулей, счётчиков и приватных переменных.",
    code: "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    value: () => count\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();\ncounter.increment();\nconsole.log(counter.value()); // 2"
},
{
    title: "Асинхронность",
    nick: "async",
    avatar: "/images/async.png",
    desc: "Современный способ работы с асинхронным кодом через async/await. Читается как синхронный, работает как асинхронный.",
    code: "async function fetchUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) throw new Error('Ошибка сети');\n    const user = await res.json();\n    return user;\n  } catch (err) {\n    console.error('Не удалось загрузить:', err);\n  }\n}"
}
];

module.exports.data = data;
