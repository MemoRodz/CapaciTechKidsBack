let realDB = 
    [{   
            Title: "JavaScript Basics for Beginners",
            Description : "JavaScript - Master the Fundamentals in 6 Hours",
            Category :['Development'],
            Start_Date : 2023-02-14,
            End_Date: 2023-03-03,
            Image: "https://stackify.com/wp-content/uploads/2018/10/JavaScript-Tutorials-for-Beginners-881x441.jpg",
            Duration: 21600,
            Instructor:  8,
            Score : 5

        },
        {   
            Title: "Aprende Javascript, HTML5 y CSS3",
            Description : "Aprende los principales lenguajes que dominan internet: JavaScript, HTML5 y CSS3",
            Category : ['Design','Development','Marketing'],
            Start_Date : 2023-02-14,
            End_Date: 2023-02-20,
            Image: "https://vaguefoundation.com/wp-content/uploads/2020/06/Connect-4.png",
            Duration: 259200,
            Instructor: 7,
            Score : 3
        },
        {   
            Title: "Node: De cero a experto",
            Description : "Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node",
            Category :['Development','Other'],
            Start_Date : 2023-04-14,
            End_Date: 2023-04-23,
            Image: "https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png",
            Duration: 36000,
            Instructor: 8,
            Score : 4
            
        },
        {   
            Title: "React.JS, Guía desde 0 (Actualizado 2022)",
            Description : "Aprende a crear sitios web de forma rápida y sencilla con React Js",
            Category :['Design','Development','Other'] ,
            Start_Date : 2023-05-05,
            End_Date: 2023-05-20,
            Image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
            Duration: 54000,
            Instructor: 8,
            Score : 5
            
        },
        {   
            Title: "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap",
            Description : "Aprende CSS3, Maquetación web, Responsive Web Design, SASS, LESS, Flexbox, CSS Grid, Bootstrap 4 y 5 desde cero",
            Category : ['Design','Development','Marketing'],
            Start_Date : 2023-06-14,
            End_Date: 2023-06-20,
            Image: "https://res.cloudinary.com/practicaldev/image/fetch/s--lyTFtvJ5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kncmnrczdkyunzqwa56o.png",
            Duration: 72000,
            Instructor: 7,
            Score : 4
           
        },
        {   
            Title: "SCRUM 2023: Gestión Ágil de Proyectos con SCRUM desde CERO",
            Description : "Aprende a implementar Scrum: Scrum Master, Product Owner, Equipo de Desarrollo. Product Backlog, Kanban, Sprint y Daily",
            Category :['Development','Business','Other'], 
            Start_Date : 2023-12-28,
            End_Date: 2023-12-28,
            Image: "https://agilescrum.com.mx/wp-content/uploads/2022/01/logo_AS_266x78-01.png",
            Duration: 14400,
            Instructor: 8,
            Score : 5
            
        },
        {   
            Title: "Aprende diseño de interfaz (UI) con Figma",
            Description : "Curso UX/UI. Aprende a utilizar Figma con este curso práctico. Diseña una app y crea un prototipo navegable y animado.",
            Category :['Design','Marketing','Other'],
            Start_Date : 2023-08-14,
            End_Date: 2023-08-15,
            Image: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
            Duration: 28800,
            Instructor: 7,
            Score : 5
            
        },
        {   
            Title: "GIT y GITHUB desde cero!",
            Description : "Maneja los repositorios más actuales del mercado",
            Category :['Development','Business','Other'] ,
            Start_Date : 2023-10-08,
            End_Date: 2023-10-08,
            Image: "https://pythonforundergradengineers.com/posts/git/images/git_and_github_logo.png",
            Duration: 7200,
            Instructor: 8,
            Score : 4
            
        },
        

        //nuevos cursos añadidos
        {   
            Title: "programacion para niñas, niños y principiantes",
            Description : "aprende programacion de una manera divertida utilizando python y minecraft",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=Ur-7KhSxEOo&list=PLWIrMjU2nAaGLO3xiyp5klHLDKew5raYg&ab_channel=Pienso%2Cluegoexisto",
            video2 :"https://www.youtube.com/watch?v=fZQ2f3ow0Lw&list=PLWIrMjU2nAaGLO3xiyp5klHLDKew5raYg&index=2&ab_channel=Pienso%2Cluegoexisto",
            video3 : "https://www.youtube.com/watch?v=Os2HZ1RB26c&list=PLWIrMjU2nAaGLO3xiyp5klHLDKew5raYg&index=3&ab_channel=Pienso%2Cluegoexisto",
            video4 : "https://www.youtube.com/watch?v=V1KrK-1wZis&list=PLWIrMjU2nAaGLO3xiyp5klHLDKew5raYg&index=4&ab_channel=Pienso%2Cluegoexisto",
            video5 : "https://www.youtube.com/watch?v=PwRdQbt6L40&list=PLWIrMjU2nAaGLO3xiyp5klHLDKew5raYg&index=5&ab_channel=Pienso%2Cluegoexisto" 
            
        },
        {   
            Title: "aprende programacion con roblox studio",
            Description : "aprenderas programacion en lenguaje lua dentro del entorno de roblox studio",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=hbdVqHGdJrw&list=PLcLC2I7iifCl4n4WMOLSdvu6kGdR__e7G&ab_channel=MiCuadernodeVideojuegos",
            video2 :"https://www.youtube.com/watch?v=gdoIOiwDNaU&list=PLcLC2I7iifCl4n4WMOLSdvu6kGdR__e7G&index=2&ab_channel=MiCuadernodeVideojuegos",
            video3 : "https://www.youtube.com/watch?v=15wgssDtnA8&list=PLcLC2I7iifCl4n4WMOLSdvu6kGdR__e7G&index=3&ab_channel=MiCuadernodeVideojuegos",
            video4 : "https://www.youtube.com/watch?v=S2Su2H6xRDg&list=PLcLC2I7iifCl4n4WMOLSdvu6kGdR__e7G&index=4&ab_channel=MiCuadernodeVideojuegos",
            video5 : "https://www.youtube.com/watch?v=F9uUaYUSWT0&list=PLcLC2I7iifCl4n4WMOLSdvu6kGdR__e7G&index=5&ab_channel=MiCuadernodeVideojuegos" 
            
        },
        {   
            Title: "robotica para niños de 7 a 8",
            Description : "aprende a elaborar robots con materiales reciclados de una manera facil y creativa",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=_K1SBRGr5Z8&list=PL8IrbYISdFUpmlSerlbA7DAvt2Hco-Guq&ab_channel=CoolThings",
            video2 :"https://www.youtube.com/watch?v=NL5-FV28uRA&list=PL8IrbYISdFUpmlSerlbA7DAvt2Hco-Guq&index=2&ab_channel=AmrMCI",
            video3 : "https://www.youtube.com/watch?v=1HHFpzFOfko&list=PL8IrbYISdFUpmlSerlbA7DAvt2Hco-Guq&index=3&ab_channel=DCBapon",
            video4 : "https://www.youtube.com/watch?v=bc-xn3hCGwI&list=PL8IrbYISdFUpmlSerlbA7DAvt2Hco-Guq&index=4&ab_channel=MuyFacilDeHacer",
            video5 : "https://www.youtube.com/watch?v=rXBEu1T_6-Y&list=PL8IrbYISdFUpmlSerlbA7DAvt2Hco-Guq&index=8&ab_channel=MuyFacilDeHacer" 
            
        },
        {   
            Title: "creacion de apps con app inventor",
            Description : "curso enfocado a cualquiera que quiera aprender a crear aplicaciones android solamente con bloques",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=eNVN55ysdFo&list=PLxCDcDTkuZR1Go7m9wF6___LirmkOmdNb&ab_channel=Prograkids",
            video2 :"https://www.youtube.com/watch?v=F5jNeah0zV0&list=PLxCDcDTkuZR1Go7m9wF6___LirmkOmdNb&index=2&ab_channel=Prograkids",
            video3 : "https://www.youtube.com/watch?v=5sDSLQxIgeY&list=PLxCDcDTkuZR1Go7m9wF6___LirmkOmdNb&index=3&ab_channel=Prograkids",
            video4 : "https://www.youtube.com/watch?v=2dswIZRkxYE&list=PLxCDcDTkuZR1Go7m9wF6___LirmkOmdNb&index=4&ab_channel=Prograkids",
            video5 : "https://www.youtube.com/watch?v=VnLY9TXn_uo&list=PLxCDcDTkuZR1Go7m9wF6___LirmkOmdNb&index=5&ab_channel=Prograkids" 
        },
        {   
            Title: "Curso básico para desarrollar videojuegos con GDevelop",
            Description : "¿Siempre has querido desarrollar videojuegos pero crees que no tienes los conocimientos necesarios de programación? Con GDevelop puedes crear tus propios juegos y de forma gratuita sin ser un programador experto",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=YjWIfsCkXz0&list=PL3iamrHNJqUeOhQi9vSfJEbCLUcv1PpD9&ab_channel=DocenTEK",
            video2 : "https://www.youtube.com/watch?v=6Dna4ZOzDoQ&list=PL3iamrHNJqUeOhQi9vSfJEbCLUcv1PpD9&index=2&ab_channel=DocenTEK",
            video3 : "https://www.youtube.com/watch?v=RTIssq7B6iw&list=PL3iamrHNJqUeOhQi9vSfJEbCLUcv1PpD9&index=3&ab_channel=DocenTEK",
            video4 : "https://www.youtube.com/watch?v=D7UqPZdFrDg&list=PL3iamrHNJqUeOhQi9vSfJEbCLUcv1PpD9&index=4&ab_channel=DocenTEK",
            video5 : "https://www.youtube.com/watch?v=TEbnbQJxcLY&list=PL3iamrHNJqUeOhQi9vSfJEbCLUcv1PpD9&index=5&ab_channel=DocenTEK"  
        },
        {   
            Title: "curso de matlab desde cero",
            Description : "curso enfocado al aprendizaje y uso de matlab",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=H-0dY_pQ2nI&list=PLyhSN9pOXwA6QSBXt7krYb0MnzrIFgQvx&ab_channel=Acompilar",
            video2 : "https://www.youtube.com/watch?v=Q9VXWdcNKxE&list=PLyhSN9pOXwA6QSBXt7krYb0MnzrIFgQvx&index=2&ab_channel=Acompilar",
            video3 : "https://www.youtube.com/watch?v=kdUm--_0iek&list=PLyhSN9pOXwA6QSBXt7krYb0MnzrIFgQvx&index=3&ab_channel=Acompilar",
            video4 : "https://www.youtube.com/watch?v=kVypRsCydIM&list=PLyhSN9pOXwA6QSBXt7krYb0MnzrIFgQvx&index=4&ab_channel=Acompilar",
            video5 : "https://www.youtube.com/watch?v=q0Osexs0bqY&list=PLyhSN9pOXwA6QSBXt7krYb0MnzrIFgQvx&index=5&ab_channel=Acompilar"  
        },
        {   
            Title: "reparacion de celulares facil",
            Description : "aprende a reparar celulares de una forma cencilla y practica",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=RXJbyAaiAAE&list=PLpFIrNquEt3BT2drT69eo0ERtWq7TY6zV&ab_channel=Tecgn",
            video2 : "https://www.youtube.com/watch?v=Z-7EHkbiVSo&list=PLpFIrNquEt3BT2drT69eo0ERtWq7TY6zV&index=2&ab_channel=Tecgn",
            video3 : "https://www.youtube.com/watch?v=XfBLsocWJUY&list=PLpFIrNquEt3BT2drT69eo0ERtWq7TY6zV&index=3&ab_channel=Tecgn",
            video4 : "https://www.youtube.com/watch?v=WsKhtc4gKwA&list=PLpFIrNquEt3BT2drT69eo0ERtWq7TY6zV&index=4&ab_channel=Tecgn",
            video5 : "https://www.youtube.com/watch?v=CyXoS9srNHc&list=PLpFIrNquEt3BT2drT69eo0ERtWq7TY6zV&index=5&ab_channel=Tecgn"  
        },
        {   
            Title: "robotica educativa con meet edison",
            Description : "Meet Edison es el robot compatible con LEGO más económico del mercado, que te permitirá aprender a programar sin tener conocimientos avanzados y te ayudará a inventar cosas nuevas cada día de una forma divertida y entretenida.",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=W0C_TDWd8Mo&list=PLvJL9ueDdxauvY8TIQG-JebmGjtnAMAS-&ab_channel=ValteamTech",
            video2 : "https://www.youtube.com/watch?v=5JK_f56WJQ0&list=PLvJL9ueDdxauvY8TIQG-JebmGjtnAMAS-&index=2&ab_channel=ValteamTech",
            video3 : "https://www.youtube.com/watch?v=f5IC-TSXm9w&list=PLvJL9ueDdxauvY8TIQG-JebmGjtnAMAS-&index=3&ab_channel=ValteamTech",
            video4 : "https://www.youtube.com/watch?v=tuw4QrqHxqk&list=PLvJL9ueDdxauvY8TIQG-JebmGjtnAMAS-&index=4&ab_channel=ValteamTech",
            video5 : "https://www.youtube.com/watch?v=eYg-ThTn7Ws&list=PLvJL9ueDdxauvY8TIQG-JebmGjtnAMAS-&index=5&ab_channel=ValteamTech"  
        },
        {   
            Title: "curso de photoshop desde cero",
            Description : "Aprende HOY a DIBUJAR en PHOTOSHOP con TABLETA GRAFICA. Te enseño como configurar photoshop para dibujar con tableta y hablamos sobre los los pinceles que podemos usar",
            Category :'Designe',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=grs38CSDpTs&list=PL2lyG1YBdH9wQmDaFyplRBffjf33sfV4z&ab_channel=davidmartimar",
            video2 : "https://www.youtube.com/watch?v=grs38CSDpTs&list=PL2lyG1YBdH9wQmDaFyplRBffjf33sfV4z&index=2&ab_channel=davidmartimar",
            video3 : "https://www.youtube.com/watch?v=xp0iDyVb9Ts&list=PL2lyG1YBdH9wQmDaFyplRBffjf33sfV4z&index=3&ab_channel=davidmartimar",
            video4 : "https://www.youtube.com/watch?v=MD5wzRUaKOo&list=PL2lyG1YBdH9wQmDaFyplRBffjf33sfV4z&index=4&ab_channel=davidmartimar",
            video5 : "https://www.youtube.com/watch?v=Ks7gKJj3zkA&list=PL2lyG1YBdH9wQmDaFyplRBffjf33sfV4z&index=5&ab_channel=MotionGraphicsenKoncepto"  
        },
        {   
            Title: "programacion para niños desde cero",
            Description : "divirtete con este curso de programacion desde cero donde aprenderas todos los fundamentos basicos de programacion",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=8JplQ3nvqE0&list=PL2w-FBSQEO9f4bd15ujZcCgIACoybuKvr&ab_channel=JuanCarlosMonsalveG",
            video2 : "https://www.youtube.com/watch?v=ndQ7BRc7Zq8&list=PL2w-FBSQEO9f4bd15ujZcCgIACoybuKvr&index=2&ab_channel=JuanCarlosMonsalveG",
            video3 : "https://www.youtube.com/watch?v=GBPE8JdMe-o&list=PL2w-FBSQEO9f4bd15ujZcCgIACoybuKvr&index=3&ab_channel=JuanCarlosMonsalveG",
            video4 : "https://www.youtube.com/watch?v=mpAFeR7gT5I&list=PL2w-FBSQEO9f4bd15ujZcCgIACoybuKvr&index=4&ab_channel=JuanCarlosMonsalveG",
            video5 : "https://www.youtube.com/watch?v=VA_1QCPlv3s&list=PL2w-FBSQEO9f4bd15ujZcCgIACoybuKvr&index=5&ab_channel=JuanCarlosMonsalveG"  
        },
        {   
            Title: "scratch para niños",
            Description : "¿Eres fan de los videojuegos? ¡Con el curso de programación de Wonderly aprenderás a desarrollar videojuegos al mismo tiempo que te diviertes",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=4RMQR_TQjyA&list=PLNMapTxyS1v9Q9ckVzACX40IHRlGtuzSV&ab_channel=Wonderly",
            video2 : "https://www.youtube.com/watch?v=MajZFv4nFfk&list=PLNMapTxyS1v9Q9ckVzACX40IHRlGtuzSV&index=2&ab_channel=Wonderly",
            video3 : "https://www.youtube.com/watch?v=7ebD6TocB9Q&list=PLNMapTxyS1v9Q9ckVzACX40IHRlGtuzSV&index=4&ab_channel=Wonderly",
            video4 : "https://www.youtube.com/watch?v=1P_QinHiFHo&list=PLNMapTxyS1v9Q9ckVzACX40IHRlGtuzSV&index=4&ab_channel=Wonderly",
            video5 : "https://www.youtube.com/watch?v=kxycoCW6kIk&list=PLNMapTxyS1v9Q9ckVzACX40IHRlGtuzSV&index=5&ab_channel=Wonderly"  
        },
        {   
            Title: "aprende programacion con minecraft y python",
            Description : "curso paso a paso sobre como configurar un Servidor de Minecraft para aprender a programar con Python.",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=kBLZ_jaNwkI&list=PLMCmWXQNbp0zjrIDy91hY5Y8_291JGC9j&ab_channel=CodingConMinecraft",
            video2 : "https://www.youtube.com/watch?v=-KjiiWSlCsc&list=PLMCmWXQNbp0zjrIDy91hY5Y8_291JGC9j&index=2&ab_channel=CodingConMinecraft",
            video3 : "https://www.youtube.com/watch?v=Hhprsczj5o8&list=PLMCmWXQNbp0zjrIDy91hY5Y8_291JGC9j&index=3&ab_channel=CodingConMinecraft",
            video4 : "https://www.youtube.com/watch?v=bN1-DB7qU_8&list=PLMCmWXQNbp0zjrIDy91hY5Y8_291JGC9j&index=4&ab_channel=CodingConMinecraft",
            video5 : "https://www.youtube.com/watch?v=1vgl1k3NgEU&list=PLMCmWXQNbp0zjrIDy91hY5Y8_291JGC9j&index=5&ab_channel=CodingConMinecraft"  
        },
        {   
            Title: "programacion con tinkercad",
            Description : "Que tal amigos este es un curso de programación  de Arduino para niños. En este video el Profe Lalo nos ayuda utilizando la plataforma de Tinkercad de Autodesk, es una plataforma online y gratuita con la que les vamos ayudar a aprender a programar en SCRATCH, un lenguaje de bloques muy sencillo con lo que podrán controlar proyectos muy padres.",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=UaYclsj-jxY&list=PLjsywMOz1BXVw1fAIBv6heQ6bBFqi7UiO&ab_channel=MinilabsRobotics",
            video2 : "https://www.youtube.com/watch?v=1rWj8ZyzXQs&list=PLjsywMOz1BXVw1fAIBv6heQ6bBFqi7UiO&index=2&ab_channel=MinilabsRobotics",
            video3 : "https://www.youtube.com/watch?v=bmx7IMYxIdg&list=PLjsywMOz1BXVw1fAIBv6heQ6bBFqi7UiO&index=3&ab_channel=MinilabsRobotics",
            video4 : "https://www.youtube.com/watch?v=bmx7IMYxIdg&list=PLjsywMOz1BXVw1fAIBv6heQ6bBFqi7UiO&index=4&ab_channel=MinilabsRobotics",
            video5 : "https://www.youtube.com/watch?v=JlTg1AKYyKg&list=PLjsywMOz1BXVw1fAIBv6heQ6bBFqi7UiO&index=5&ab_channel=MinilabsRobotics"  
        },

        {   
            Title: "arduino desde cero",
            Description : "Haremos una breve introducción a la plataforma Arduino permitiendo vislumbrar su increible potencial y su facilidad de uso.Desde cero y de forma sencilla y didáctica iremos incorporando conceptos para realizar diversos proyectos de utilidad en el mundo real",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=eBVvD85Ml2c&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2&ab_channel=BitwiseAr",
            video2 : "https://www.youtube.com/watch?v=GUuWgk3dXd0&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2&index=2&ab_channel=BitwiseAr",
            video3 : "https://www.youtube.com/watch?v=BWhup75svIk&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2&index=3&ab_channel=BitwiseAr",
            video4 : "https://www.youtube.com/watch?v=ArvU6pEiQdA&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2&index=4&ab_channel=BitwiseAr",
            video5 : "https://www.youtube.com/watch?v=mlw3APOUt8U&list=PLkjnQ3NFTPnY1eNyLDGi547gkVui1vyn2&index=5&ab_channel=BitwiseAr"  
        },
        {   
            Title: "Electronica Basica",
            Description : "En este curso aprenderá los conceptos de la electrónica básica. Este capitulo muestra los conceptos de Electricidad y Circuito Eléctrico",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "",
            video2 : "",
            video3 : "",
            video4 : "",
            video5 : ""  
        },
        {   
            Title: "Electronica Basica",
            Description : "En este curso aprenderá los conceptos de la electrónica básica. Este capitulo muestra los conceptos de Electricidad y Circuito Eléctrico",
            Category :'Development',
            Image: "pendiente",
            Duration: 7200,
            video1 : "https://www.youtube.com/watch?v=FOY66XAefsk&list=PLKxOqr8Lfq-zJkoot8vtQgmILOi1fAEQR&ab_channel=TecnocomIngenieria",
            video2 : "https://www.youtube.com/watch?v=xXyYZK2Qx94&list=PLKxOqr8Lfq-zJkoot8vtQgmILOi1fAEQR&index=2&ab_channel=TecnocomIngenieria",
            video3 : "https://www.youtube.com/watch?v=xg83PiJtKZY&list=PLKxOqr8Lfq-zJkoot8vtQgmILOi1fAEQR&index=3&ab_channel=TecnocomIngenieria",
            video4 : "https://www.youtube.com/watch?v=k0Mtr-Wc4AE&list=PLKxOqr8Lfq-zJkoot8vtQgmILOi1fAEQR&index=4&ab_channel=TecnocomIngenieria",
            video5 : "https://www.youtube.com/watch?v=QzeGroGeVXA&list=PLKxOqr8Lfq-zJkoot8vtQgmILOi1fAEQR&index=5&ab_channel=TecnocomIngenieria"  
        },
        ]

module.exports = realDB;