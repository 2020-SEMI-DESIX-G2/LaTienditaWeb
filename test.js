const {spawn} = require('child_process');

const bruh = () => {
  const python = spawn('python', ['main.py']);
  python.stdout.on('data', (data) => { 
    console.log(data.toString());
  });
};

bruh();
