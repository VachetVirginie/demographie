import React, {Component} from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getCountries} from "../actions/index"

class SearchBar extends Component{
 
    constructor(props){
        super(props)
        this.state = {selectedCountry:this.props.defaultCountry}
    }
    componentWillMount () {
        this.props.getCountries()
    }

    renderSelectBox(){
        const{countries} = this.props
        if(countries){
            return (
                <select value = {this.state.defaultCountry} onChange={(e)=> this.search(e)} className="col-lg-10 input-group">
                {
                    countries.map((country)=> {
                        return <option key={country} value={country}>{country}</option>
                    })
                }
                </select>
            )
        }else{
            return <div>No country found</div>
        }
    }

    search(e){
        this.setState({selectedCountry:e.taget.value})
    }

        render (){
            return (
                <div className="search-bar">
                        {this.renderSelectBox()}
                </div>
            )
        }
    }
const mapStateToProps = (state, ownProps) => {
    return{
        countries: state.countries
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCountries}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
