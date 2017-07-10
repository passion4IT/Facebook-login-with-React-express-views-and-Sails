import React from 'react'

const Dashboard = (user) => (
    <html>
    <head>
        <link rel="stylesheet" href="/styles/styles.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </head>
    <body>
    <div className="dashboard container">
        <div className="col-xs-12 picture-container">
            <a href="/logout" className="btn logout-button pull-right">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                Logout
            </a>
        </div>
        <div className="col-xs-12">
            <div className="row">
                <div className="col-xs-4">
                    <img src={ user.user.coverPic } className="img-responsive cover-pic" />
                    <img src={ user.user.profilePic } className="img-responsive profile-pic" />
                </div>
                <div className="col-xs-8 user.user-details">
                    <p>Welcome { user.user.first_name } { user.user.last_name }! </p>
                    <p className="text-center text-info heading"> Here are your basic details: </p>
                    <p>Motivation:
                        <span className="text-success">  { user.user.about } </span>
                    </p>
                    <p> Contact email: <span className="text-success"> { user.user.contact } </span></p>
                    <a href={ user.user.facebookLink } target="_blank">
                        <i className="fa fa-facebook facebook-link" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    </body>
    </html>
)
export default Dashboard