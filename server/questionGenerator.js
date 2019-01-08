let x;
let y;
let z;
let startLevel = 0;
let level =  msg.req.query.level;
let question = "";
let result = "";
let responseMsg = "";
let questionPattern = "";

if (Math.floor(level) === '2') {
    y = Math.floor(Math.random()*10+1);
    x = y + Math.floor(Math.random()*20+1);
    result = x % y;
    question = `${x} % ${y}?`
    questionPattern = "(${x} % ${y}) ?"

}

else if (level === '3') {
    y = Math.floor(Math.random()*20+1);
    x = Math.floor(Math.random()*20+1);
    z = Math.floor(Math.random()*10+1);
    result = (x + y) % z;
    question = `(${x}+${y})%${z} ?`
    questionPattern = "(${x}+${y})%${z} ?"
}

else if (level === '4') {
    y = Math.floor(Math.random()*20+1);
    x = Math.floor(Math.random()*20+1);
    z = Math.floor(Math.random()*10+1);
    result = (x*y) % z;
    question = `(${x}*${y})%${z}?`
    questionPattern = "(${x}*${y})%${z} ?"
}


responseMsg = {
    "question": question,
    "result": result,
    "questionPattern": questionPattern,
    "variables": {"x": x, "y": y, "z": z}
};

msg.payload = responseMsg;


return msg;