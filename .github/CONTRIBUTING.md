## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential in keeping it great.

> [!IMPORTANT]  
> - Create new branch for your changes. make your changes there!
> - Do NOT add PR's to **main** branch.
> - Add PR's ONLY to **develop** branch.
> - File names and branch names should ONLY include simple letters.

## Folder Structure

1. root
   - assets
     - js
       - > add your js file
     - css
       - > add style sheet
     - media
       - home
       - admin-page
       - > make your section folder here for media
   - HTML's 
    > make your html document here for the use of otherts
    
## Theme Colors:

- Use these theme colors throughout:
    - primary-color: #e82574;
    - primary-color-dark: #bc1c5c;
    - text-dark: #0c0a09;
    - text-light: #78716c;

## Additional Notes:

> [!NOTE]
> You must run the page as a live server. Without running it, the header and footer will not appear correctly.

## Basic Template

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SBR | Hotel Management System</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.lineicons.com/4.0/lineicons.css" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="Assets/js/header-footer-active.js"></script>
    <script src="Assets/js/header-footer.js"></script>

    <link rel="stylesheet" href="Assets/css/YOUR STYLE NAME">
</head>
<body>
    <div id="header"></div>
    <div class="header-container">
        <div class="section__container" id="home">
            <div class="container-text">
                <h1><!--YOUR PAGE NAME--></h1>
                <div class="page-path">
                    <p><span>Home ></span> <!--YOUR PAGE NAME--></p>
                </div>
            </div>
        </div>
    </div>
        <div class="sec">
            <!--YOUR CODE GOSE HERE-->
        </div>
    <div id="footer"></div>
    <script src="Assets/js/YOUR SCRIPT NAME"></script>
</body>
</html>

```

### CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

:root {
    --primary-color: #e82574;
    --primary-color-dark: #bc1c5c;
    --text-dark: #0c0a09;
    --text-light: #78716c;
    --white: #ffffff;
    --max-width: 1200px;
}

*{
    font-family: 'Poppins', sans-serif;
    margin:0; 
    padding:0;
    box-sizing: border-box;
}
.sec{
    margin-top: 20px;
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 20px;
    min-height: 100vh;
}
body {
    overflow-x: hidden;
}

.section__container {
    margin: auto;
    margin-bottom: 1rem;
    line-height: 3rem;
    height: 400px;
    text-align: center;
}
.header-container{
    height: 400px;
    background-image: url("../media/index/header.jpg");
    background-position: center ; 
    background-size: cover;
    background-repeat: no-repeat;
}
.container-text{
    color: rgb(255, 254, 254);
    padding-top: 150px;
}
.container-text h1{
    font-weight: bold;
}
.container-text span{
    color: var(--text-light);
}

```