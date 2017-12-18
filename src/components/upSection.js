import React from 'react';



class UpSection extends React.Component {
    
    render() {
        return (
            <section className="uppsection">
    <div className="container">
        <div className="row ">
            <div className="col-sm-7 " >
                <h1 className="m-b-40 hidden-xs">Jen’s kicking butt and so is her web content</h1><h1 className="m-b-40 visible-xs">Get more done with freelancers</h1>

                <p className="text-long m-b-40 hidden-xs">Get more done with freelancers</p><p className="text-long m-b-80 visible-xs">Grow your business with the top freelancing website</p>

                <div className="form-group visible-lg visible-md">
                    <div className="input-group">
                        <input className="form-control " placeholder="What type of work do you need?"  type="text"></input>
                            <a href="" className="btn btn-block-xs btn-primary font-gotham-medium" >
                                Get Started
            </a>
          </div>
                    </div>
                    <div className="hidden-lg hidden-md">
                        <a href="/signup/?dest=job-posting" className="btn btn-block-xs btn-primary">
                            Get Started
          </a>

                    </div>
                </div>
            </div>
        </div>
   
</section>

            )
    }
}

export default UpSection;