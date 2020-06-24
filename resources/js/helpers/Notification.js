
class Notification {

    success(){
        new Noty({
                type: 'succes',
                layout: 'topRight',
                text: 'Some notification text',
                timeout: 1000
            }).show();
    }

    alert(){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'Are you sure ?',
            timeout: 1000
        }).show();
    }

    error(){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'Something went wrong !!',
            timeout: 1000
        }).show();
    }

    warning(){
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: 'Ups wrong',
            timeout: 1000
        }).show();
    }

}

export default Notification = new Notification();
