import React from 'react';

function BirthdayForm() {
    return(
        <React.Fragment>
            <form class="container form-inline justify-content-center mt-2">
                <div class="form-group container" id="home">
                    <div>
                        <input type="text" class="form-control mx-3" placeholder="What is your name?"/>
                    </div>
                    <div>
                        <input type="email" class="form-control mx-3" placeholder="Email Address"/>
                    </div>
                    <label for="birthday">Birthday:</label>
                    <div>
                        <input type="date" id="birthday" class="form-control mx-3" placeholder="mm/dd/yyyy"/>
                    </div>
                    <div>
                        <button class="btn btn-dark" type="submit">Sign me up!</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default BirthdayForm;