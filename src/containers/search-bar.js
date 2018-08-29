import React, {Component} from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getCountries} from "../actions/index"

class SearchBar extends Component{

    componentWillMount () {
        this.props.getCountries()
    }

    renderSelectBox(){
        const{countries} = this.props
        if(countries){
            return (
                <select className="col-lg-12 input-group">
                {
                    countries.map((country)=>{
                        return <option key={country} value={country}>{country}</option>
                    })
                }
                </select>
            )
        }else{
            return <div>No country found</div>
        }
    }


        render (){
            return (
                <div>

                </div>
            )
        }
    }
const mapStateToProps = (state) => {
    return{
        countrie: state.countries
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCountries}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
