import React from 'react';

// TODO: Refactor to functional component
class ExerciseForm extends React.Component {

    render() {
        //console.log(this.props);
        const { onChange, onSubmit, form } = this.props;

        return (
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={onChange} />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="left color"
                                name="leftColor"
                                onChange={onChange}/>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="right color"
                                name="rightColor"
                                onChange={onChange} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary float-right">
                        Submit
                    </button>

                </form>
            </div>
        )
    }

}

export default ExerciseForm;