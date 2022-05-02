let h1 = document.createElement("h1");

setTimeout(() => {
    setTimeout(() => {
        h1.innerHTML = "10";
        document.body.append(h1);
        setTimeout(() => {
            h1.innerHTML = "9";
            document.body.append(h1);
            setTimeout(() => {
                h1.innerHTML = "8";
                document.body.append(h1);
                setTimeout(() => {
                    h1.innerHTML = "7";
                    document.body.append(h1);
                    setTimeout(() => {
                        h1.innerHTML = "6";
                        document.body.append(h1);
                        setTimeout(() => {
                            h1.innerHTML = "5";
                            document.body.append(h1);
                            setTimeout(() => {
                                h1.innerHTML = "4";
                                document.body.append(h1);
                                setTimeout(() => {
                                    h1.innerHTML = "3";
                                    document.body.append(h1);
                                    setTimeout(() => {
                                        h1.innerHTML = "2";
                                        document.body.append(h1);
                                        setTimeout(() => {
                                            h1.innerHTML = "1";
                                            document.body.append(h1);
                                            setTimeout(() => {
                                                h1.innerHTML = "Happy Independence Day";
                                                document.body.append(h1);
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
