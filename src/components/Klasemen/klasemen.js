import React, { Component } from 'react';

class klasemen extends Component {
    render() {
        return (
            <div className='container'>
                <iframe frameBorder="0" scrolling="no" width={520} height={700} 
                    src="https://www.fctables.com/indonesia/super-liga/iframe/?type=table&lang_id=2&country=102&template=318&team=&timezone=Asia/Bangkok&time=24&po=1&ma=1&wi=1&dr=1&los=1&gf=1&ga=1&gd=1&pts=1&ng=1&form=1&width=520&height=700&font=Tahoma&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=a32714&hfc=FFFFFF">
                </iframe>
            {/* <div style={{textAlign: 'center'}} /><a href="https://www.fctables.com/indonesia/super-liga/" rel="nofollow">FcTables.com</a> */}
            </div>
        );
    }
}

export default klasemen;
