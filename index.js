        let excuse;

        let who = ['the dog','my granma','his turtle','my bird'];
        let what = ['eat','pissed','crushed','broked'];
        let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

        excuse=who[Math.floor(who.length*Math.random())];
        console.log(who);

        excuse=excuse+" "+what[Math.floor(what.length*Math.random())];
        console.log(what.length);

        excuse=excuse+" "+when[Math.floor(when.length*Math.random())];

        document.getElementById("excuse").innerHTML = excuse;
