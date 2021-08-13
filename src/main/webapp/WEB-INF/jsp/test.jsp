<!DOCTYPE html>
<html lang='pl'>
    <head>
        <meta charset="utf-8">
        <title>Main Page</title>
        <link rel='stylesheet' type='text/css' href='css/reset.css'>
        <link rel='stylesheet' type='text/css' href='css/style.css'>
    </head>
    <body> 
        <div id='content'>
            <div class='headerFloatZone'>
                <header>
                    <a href='index'><img class='companyIcon' src='img/icoHeader/add-img.svg' alt='logo'></a>
                    <div id='title'>
                        <a href='index'>
                            <h1>Header Title</h1>
                            <h2>...and subtitle.</h2>
                        </a>
                    </div>
                    <nav id='navBar'>
                        <a href="index">Link 1</a>
                        <a href="index">Link 2</a>
                        <a href="index">Link 3</a>
                    </nav>
                </header>
            </div>
            <nav id='sideBar'>
                <a href="index">Link 1</a>
                <a href="index">Link 2</a>
                <a href="index">Link 3</a>
            </nav>
            <main>

            </main>
        </div>
        <footer>
            <div id='follow'>
                Follow/Share:
                <a href="#"><img src='img/icoMedia/fb.png' alt='facebook'></a>
                <a href="#"><img src='img/icoMedia/tweeter.png' alt='tweeter'></a>
                <a href="#"><img src='img/icoMedia/insta.png' alt='instagram'></a>
                <a href="#"><img src='img/icoMedia/pin.png' alt='pinterest'></a>
            </div>
            <div id='newsletter'>
                <p>Be the first person to know about our sales/events/news.<br>
                Subscribe to newsletter now!</p>
                <form action='#' target='_blank' method='POST'>
                    <label for='signEmail'>Email: </label>
                    <input type='email' id='signEmail' name='signEmail'>
                    <input type='submit' value='Sign Up!'><br>
                    <input type="checkbox" id="3rdParty" name="3rdParty" value="Yes" checked>
                        <label class='small' for="3rdParty">I want to receive emails from 3rd parties and business partners</label>
                </form>
            </div>
            <div id='links'>
                <nav>
                    <a class='footerNavTitle'>Site Links:</a>
                    <a class='footerNavLink' href="index">Link 1</a>
                    <a class='footerNavLink' href="index">Link 2</a>
                    <a class='footerNavLink' href="index">Link 3</a>
                </nav>
                <nav>
                    <a class='footerNavTitle'>Eexternal Links:</a>
                    <a class='footerNavLink' href="index">Link 1</a>
                    <a class='footerNavLink' href="index">Link 2</a>
                    <a class='footerNavLink' href="index">Link 3</a>
                </nav>
                <nav>
                    <a class='footerNavTitle'>Other References:</a>
                    <a class='footerNavLink' href="index">Link 1</a>
                    <a class='footerNavLink' href="index">Link 2</a>
                    <a class='footerNavLink' href="index">Link 3</a>
                </nav>
            </div>
            <div id='copyright'>
                Localhost.com &copy;2020 Created by: Mikołaj Walczak
            </div>
        </footer>
    </body>
</html>