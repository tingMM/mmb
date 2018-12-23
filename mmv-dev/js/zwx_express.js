(function () {
    $.fn.express = function () {
        this.width = $(window).width() - 20;
        this.height = $(window).height() - 20;
        this.isspread = false;
        this.disable = false;
        animation = (s, option, time = 200) => {
            return new Promise((resovle) => this.find(s).animate(option, time, 'ease-in-out', resovle));
        }
        this.on('drag', (e) => {
            let t = 20,
                r = this.width,
                b = this.height,
                l = 20;
            if (this.isspread) {
                t += 40;
                r -= 40;
                b -= 40;
                l += 40;
            }
            let { x: left, y: top } = e.detail.center;
            left = left < l ? l : left;
            top = top < t ? t : top;
            left = left > r ? r : left;
            top = top > b ? b : top;
            this.css({ left, top });
        })
        this.on('dragend', (e) => {
            if (!this.isspread) {
                let { x: left, y: top } = e.detail.center;
                left = left < this.width / 2 ? 20 : this.width;
                this.animate({ left, top }, '.5s')
            }

        })
        this.on('tap', () => {
            if(this.disable) {
                return false;
            }
            this.disable = true;
            if (!this.isspread) {
                let l = this.position().left < this.width / 2 ? 60 : this.width - 40;
                this.animate({ left:l }, '.5s')
                this.isspread = true;
                animation('.container', { width: 120, height: 120 }, 500)
                    .then(() => animation('a:first-child', { left: '50%', top: '15%' }))
                    .then(() => animation('a:nth-child(2)', { left: '75%', top: '25%' }))
                    .then(() => animation('a:nth-child(3)', { left: '85%', top: '50%' }))
                    .then(() => animation('a:nth-child(4)', { left: '75%', top: '75%' }))
                    .then(() => animation('a:nth-child(5)', { left: '50%', top: '85%' }))
                    .then(() => animation('a:nth-child(6)', { left: '25%', top: '75%' }))
                    .then(() => animation('a:nth-child(7)', { left: '15%', top: '50%' }))
                    .then(() => animation('a:nth-child(8)', { left: '25%', top: '25%' }))
                    .then(()=>this.disable = false)
            } else {
                this.isspread = false;
                animation('a:nth-child(8)', { left: '50%', top: '50%' })
                    .then(() => animation('a:nth-child(7)', { left: '50%', top: '50%' }))
                    .then(() => animation('a:nth-child(6)', { left: '50%', top: '50%' }))
                    .then(() => animation('a:nth-child(5)', { left: '50%', top: '50%' }))
                    .then(() => animation('a:nth-child(4)', { left: '50%', top: '50%' }))
                    .then(() => animation('a:nth-child(3)', { left: '50%', top: '50%' }))
                    .then(() => animation('a:nth-child(2)', { left: '50%', top: '50%' }))
                    .then(() => animation('a:nth-child(1)', { left: '50%', top: '50%' }))
                    .then(() => animation('.container', { width: 40, height: 40 }, 500))
                    .then(() => {
                        let l = this.position().left < this.width / 2 ? 20 : this.width;
                        this.animate({ left: l }, '.5s');
                        this.disable = false;
                })
            }
        });
    }
}())
