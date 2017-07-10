import React from 'react'

export default () => (
    <html>
    <head>
        <link rel="stylesheet" href="/styles/styles.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </head>
    <body>
        <div className="main-page container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 login-block">
                    <form action="/process" method="post">
                        <div className="form-group">
                            Username:
                            <input type="text" required placeholder="Your username" className="form-control" name="username" />
                        </div>
                        <div className="form-group">
                            Password:
                            <input type="password" required placeholder="Your password" className="form-control" name="password" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                        <a href="/auth/facebook" className="btn login-button pull-right">
                            <i className="fa fa-facebook"></i>acebook
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </body>
    </html>
)