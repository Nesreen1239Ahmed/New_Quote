
function Quote() {
    var quote = [
        "“Be yourself; everyone else is already taken.”"
        ,"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "
        ,"  “So many books, so little time.”    "
        , " “A room without books is like a body without a soul.” "
        , " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” "
       , "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.” "
        , " “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"

    ];

    var author = ["― Oscar Wilde", "― Albert Einstein", "― Frank Zappa ", " ― Marcus Tullius Cicero", "― Bernard M. Baruch ", " ― Steve Jobs", "― J.K. Rowling"];
    var img_array = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];

    var num = Math.floor(Math.random() * quote.length);


    selected_img = img_array[num];

    document.getElementById('quote').innerHTML = quote[num];
    document.getElementById('author').innerHTML = author[num];
    document.getElementById('img').src = `./images/${selected_img}`;




}









