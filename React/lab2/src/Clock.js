import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { time: this.getTime() };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ time: this.getTime() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getTime() {
        const { format = '24', timezone = null } = this.props;

        const now = new Date();
        let utc = now.getTime() + now.getTimezoneOffset() * 60000;

        let offsetMs = 0;
        if (timezone) {
            const [sign, hours, minutes] = timezone.match(/([+-]?)(\d+):(\d+)/).slice(1);
            const offsetSign = sign === '-' ? -1 : 1;
            offsetMs = offsetSign * ((parseInt(hours) * 60 + parseInt(minutes)) * 60000);
        }

        const localTime = new Date(utc + offsetMs);

        let hours = localTime.getHours();
        let minutes = localTime.getMinutes();
        let seconds = localTime.getSeconds();

        let suffix = '';
        if (format === '12') {
            suffix = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
        }

        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)} ${suffix}`;
    }

    pad(n) {
        return n < 10 ? '0' + n : n;
    }

    render() {
        return (
            <div style={{ fontSize: '24px', margin: '10px 0' }}>
                {this.state.time}
            </div>
        );
    }
}

export default Clock;
