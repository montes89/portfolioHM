var quotes = ['Life is what happens to us while we are making other plans.― Allen Saunders', 
'Life isn\’t about finding yourself. Life is about creating yourself.― George Bernard Shaw', 
'Doubt kills more dreams than failure ever will. – Suzy Kassem', 
'Keep your face always toward the sunshine, and shadows will fall behind you. – Walt Whitman',
 'Whether you think you can or think you can\’t, you\’re right. – Henry Ford', 
 'Your talent determines what you can do. Your motivation determines how much you\’re willing to do. Your attitude determines how well you do it. —Lou Holtz',
'The happiness of your life depends on the quality of your thoughts. – Marcus Aurelius',
'You are who you are meant to be. Dance as if no one\’s watching. Love as if it\’s all you know. Dream as if you\’ll live forever. Live as if you\’ll die today. James Dean',
'You do not find the happy life. You make it.— Camilla Eyring Kimball', 
'It is during our darkest moments that we must focus to see the light. — Aristotle',
'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. -Dale Carnegie',
'Just because it’s what’s done doesn\’t mean it\’s what should be done!- Cinderella', 'It’s no use going back to yesterday because I was a different person then. – Alice, Alice In Wonderland',
'Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi',
'All our dreams can come true if we have the courage to pursue them.- Walt Disney']


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));

    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

