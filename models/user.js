// =============================================================================
// Create our model for user
// =============================================================================
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
         firstname: {
             type  :  DataTypes.STRING(100),
             allowNull : false,
             validate  : {
                 is : {
                     args : /^[a-z\s-']+$/i,
                     msg  :  "Only letters, spaces, hyphens and apostrophes are allowed."
                },
                 len : {
                     args : [1, 100],
                     msg  :  "Your name cannont exceed 100 characters."
                }
            }
        },
         lastname : {
             type  : DataTypes.STRING(100),
             allowNull : false,
             validate  : {
                 is : {
                     args : /^[a-z\s-']+$/i,
                     msg  :  "Only letters, spaces, hyphens and apostrophes are allowed."
                },
                 len : {
                     args : [1, 100],
                     msg  :  "Your name cannont exceed 100 characters."
                }
            }
        },
         email : {
             type  : DataTypes.STRING(100),
             allowNull : false,
             unique : true,
             validate  : {
                 isEmail : {
                     args : true,
                     msg  :  "Please enter a valid email."
                },
                 len : {
                     args : [1, 100],
                     msg :  "Your email cannot exceed 100 characters."
                }
            }
        },
         phonenumber : {
             type :  DataTypes.INTEGER,
             allowNull : false,
             unique : true,
             validate : {
                 isNumeric : {
                     args : true,
                    msg:  "Please enter a valid phone number."
                }
            }
        }
    });
    return User;
}
