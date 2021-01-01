<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Victim server</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>
    <main class="container">
        <div class="row justify-content-md-center">
            <div class="col-6">
                <div class="card text-center mt-5">
                    <div class="card-header">Hey!</div>
                    <div class="card-body">
                        <h5 class="card-title">I'm a honest website.</h5>
                        <p class="card-text text-danger mt-3">But I've a XSS fault and all hackers can exploit it. In this case, a cookie stealer script are injected inside the DOM.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script src="./scripts/xss.min.js"></script>
</body>
</html>