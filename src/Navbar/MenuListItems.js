import React , {Component} from 'react';
import './MenuListItems.css';

class  MenuListItems extends Component{
    
    constructor(props){ 
        super(props);
        this.state = {content:'', temp : '' , Menu_1 : true , Menu_2 :false ,data : {
            "allCategories": [
              {
                "id": "5fbf5bdf294c688aa4a2a5cd",
                "title": "Kids",
                "slug": "Kids-hqji488akid5mb2a",
                "children": [
                  {
                    "id": "5fbf5bdf294c688aa4a2a5d4",
                    "title": "Preschool & KG"
                  },
                  {
                    "id": "5fbf5be0294c688aa4a2a692",
                    "title": "Class 1"
                  },
                  {
                    "id": "5fbf5be0294c688aa4a2a6e3",
                    "title": "Class 2"
                  },
                  {
                    "id": "5fbf5be0294c688aa4a2a73a",
                    "title": "Class 3"
                  },
                  {
                    "id": "5fbf5be0294c688aa4a2a7a7",
                    "title": "Coding & Tech"
                  },
                  {
                    "id": "5fccdabc294c688aa4d2bac2",
                    "title": "Health & Wellness"
                  },
                  {
                    "id": "5fe1a293294c688aa41f25c1",
                    "title": "Social Studies"
                  }
                ]
              },
              {
                "id": "5f6073ab294c688aa47a69c0",
                "title": "Schooling",
                "slug": "Schooling-18aqldmb4khm9lere",
                "children": [
                  {
                    "id": "5f6073ad294c688aa47a6c5c",
                    "title": "CBSE Board"
                  },
                  {
                    "id": "5f6073b5294c688aa47a7533",
                    "title": "ICSE Board"
                  },
                  {
                    "id": "5f6073bb294c688aa47a7d6e",
                    "title": "State Boards"
                  }
                ]
              },
              {
                "id": "5f6073d0294c688aa47a983d",
                "title": "University",
                "slug": "University-18aqldmb4khm9lf2v",
                "children": [
                  {
                    "id": "5f6073d0294c688aa47a9841",
                    "title": "Humanities"
                  },
                  {
                    "id": "5f6073d5294c688aa47a9f69",
                    "title": "Social Sciences"
                  },
                  {
                    "id": "5f6073de294c688aa47aa9ff",
                    "title": "Engineering"
                  },
                  {
                    "id": "5f6073e4294c688aa47ab0e0",
                    "title": "Science"
                  }
                ]
              },
              {
                "id": "5f6073ec294c688aa47aba5b",
                "title": "Competitive Exams",
                "slug": "Competitive-Exams-18aqldmb4khm9lfb7",
                "children": [
                  {
                    "id": "5f6073ec294c688aa47aba5f",
                    "title": "NCERT"
                  },
                  {
                    "id": "5f6073f1294c688aa47ac128",
                    "title": "UPSC"
                  },
                  {
                    "id": "5f6073fe294c688aa47ad312",
                    "title": "State Exams"
                  },
                  {
                    "id": "5f607409294c688aa47ae1f2",
                    "title": "RBI"
                  },
                  {
                    "id": "5f60740a294c688aa47ae376",
                    "title": "NABARD"
                  },
                  {
                    "id": "5f60740b294c688aa47ae56c",
                    "title": "Banking & Insurance"
                  },
                  {
                    "id": "5f60740c294c688aa47ae688",
                    "title": "SSC"
                  },
                  {
                    "id": "5f607410294c688aa47aec6d",
                    "title": "Railways"
                  },
                  {
                    "id": "5f607412294c688aa47aee65",
                    "title": "Defence & Police"
                  },
                  {
                    "id": "5f607414294c688aa47af128",
                    "title": "Teaching & Research"
                  },
                  {
                    "id": "5f607418294c688aa47af72a",
                    "title": "Engineering"
                  },
                  {
                    "id": "5f60741c294c688aa47afd51",
                    "title": "Medical"
                  },
                  {
                    "id": "5f60741c294c688aa47afdbe",
                    "title": "Commerce"
                  },
                  {
                    "id": "5f607420294c688aa47b035b",
                    "title": "MBA"
                  },
                  {
                    "id": "5f607421294c688aa47b0454",
                    "title": "Legal & Judiciary"
                  }
                ]
              },
              {
                "id": "5f607429294c688aa47b110f",
                "title": "Professional Skills",
                "slug": "Professional-Skills-1no7ean8khyj1iwa",
                "children": [
                  {
                    "id": "5f607429294c688aa47b1114",
                    "title": "Development"
                  },
                  {
                    "id": "5f607430294c688aa47b1bb7",
                    "title": "IT & Software"
                  },
                  {
                    "id": "5f607433294c688aa47b204c",
                    "title": "Business"
                  },
                  {
                    "id": "5f60743f294c688aa47b314c",
                    "title": "Marketing"
                  },
                  {
                    "id": "5f607444294c688aa47b3a28",
                    "title": "Office Productivity"
                  },
                  {
                    "id": "5f607447294c688aa47b3f3c",
                    "title": "Design"
                  },
                  {
                    "id": "5f60744c294c688aa47b47e8",
                    "title": "Creative Professionals"
                  },
                  {
                    "id": "5f607452294c688aa47b500e",
                    "title": "Industry & Services"
                  }
                ]
              },
              {
                "id": "5f607459294c688aa47b5a6d",
                "title": "Languages",
                "slug": "Languages-18aqldmb4khm9lgcb",
                "children": [
                  {
                    "id": "5f607459294c688aa47b5a74",
                    "title": "English"
                  },
                  {
                    "id": "5f60745e294c688aa47b5fdc",
                    "title": "Arabic"
                  },
                  {
                    "id": "5f60745e294c688aa47b6033",
                    "title": "Bengali"
                  },
                  {
                    "id": "5f60745e294c688aa47b6088",
                    "title": "Chinese"
                  },
                  {
                    "id": "5f60745f294c688aa47b60dd",
                    "title": "French"
                  },
                  {
                    "id": "5f60745f294c688aa47b612f",
                    "title": "German"
                  },
                  {
                    "id": "5f60745f294c688aa47b6183",
                    "title": "Greek"
                  },
                  {
                    "id": "5f60745f294c688aa47b61d7",
                    "title": "Gujarati"
                  },
                  {
                    "id": "5f607460294c688aa47b622d",
                    "title": "Hebrew"
                  },
                  {
                    "id": "5f607460294c688aa47b6284",
                    "title": "Italian"
                  },
                  {
                    "id": "5f607460294c688aa47b62d8",
                    "title": "Japanese"
                  }
                ]
              },
              {
                "id": "5f607464294c688aa47b6775",
                "title": "Personal Growth",
                "slug": "Personal-Growth-18aqldmb4khm9lggc",
                "children": [
                  {
                    "id": "5f607464294c688aa47b677c",
                    "title": "Motivation"
                  },
                  {
                    "id": "5f607465294c688aa47b6809",
                    "title": "Productivity"
                  },
                  {
                    "id": "5f607466294c688aa47b68e9",
                    "title": "Leadership"
                  },
                  {
                    "id": "5f607467294c688aa47b69fe",
                    "title": "Personal Finance"
                  },
                  {
                    "id": "5f607468294c688aa47b6af9",
                    "title": "Career Development"
                  },
                  {
                    "id": "5f607469294c688aa47b6ba2",
                    "title": "Parenting & Relationships"
                  },
                  {
                    "id": "5f607469294c688aa47b6c68",
                    "title": "Happiness"
                  },
                  {
                    "id": "5f60746a294c688aa47b6d49",
                    "title": "Religion & Spirituality"
                  },
                  {
                    "id": "5f60746b294c688aa47b6e2b",
                    "title": "Personal Brand Building"
                  },
                  {
                    "id": "5f60746c294c688aa47b6ef2",
                    "title": "Creativity"
                  },
                  {
                    "id": "5f60746c294c688aa47b6fce",
                    "title": "Stress Management"
                  },
                  {
                    "id": "5f60746d294c688aa47b70b0",
                    "title": "Memory & Study Skills"
                  },
                  {
                    "id": "5f60746e294c688aa47b718c",
                    "title": "Lifestyle"
                  },
                  {
                    "id": "5f60746f294c688aa47b7244",
                    "title": "Health & Fitness"
                  }
                ]
              },
              {
                "id": "5f607470294c688aa47b7337",
                "title": "Edutainment",
                "slug": "Edutainment-18aqldmb4khm9lgjr",
                "children": [
                  {
                    "id": "5f607470294c688aa47b733e",
                    "title": "Kids"
                  },
                  {
                    "id": "5f607471294c688aa47b7400",
                    "title": "Society"
                  },
                  {  
                    "id": "5f607472294c688aa47b74f9",
                    "title": "Art & Music"
                  },
                  {
                    "id": "5f607472294c688aa47b759e",
                    "title": "History"
                  },
                  {
                    "id": "5f607473294c688aa47b765d",
                    "title": "Mythology"
                  },
                  {
                    "id": "5f607474294c688aa47b76e8",
                    "title": "Sciences"
                  },
                  {
                    "id": "5f607475294c688aa47b78fb",
                    "title": "Travel"
                  },
                  {
                    "id": "5f607476294c688aa47b79f7",
                    "title": "Technology"
                  },
                  {
                    "id": "5f60747b294c688aa47b7f54",
                    "title": "Personalities"
                  },
                  {
                    "id": "5fd9fa0f294c688aa4021402",
                    "title": "Environment"
                  }
                ]
              }
            ]
    }
}
         
    };  

    handleMenuItemClick = (e) =>{  
        const id = e.currentTarget.id;

        const temp = this.state.data.allCategories[id].children.map( (array , i)=>{
            return <li>
                     <a> {array.title} </a>
                     <span> <i className="fa fa-arrow-right"></i> </span>
                   </li>
        });
        console.log(temp);
        this.setState({ temp : temp });   
        this.setState({ Menu_1 : false });
        this.setState({ Menu_2 : true });
    }

    closeMenu_2 = () =>{
        this.setState({ Menu_1 : true });
        this.setState({ Menu_2 : false });
    }
   
    render(){return(
                <div>
                        <div className={ this.state.Menu_1 ? "MenuListItems-item  active" : "MenuListItems-item "}>

                            <ul>
                                <li className="login-btn" >
                                    <a> Login </a>                                   
                                </li>
                                <li className="signup-btn" >
                                    <a> Sign Up</a>                                   
                                </li>
                                <li  >
                                    <hr></hr>
                                </li>

                                {/* {this.state.data.allCategories.map( (array , i) =>{
                                    
                                    return  <li id={i} onClick={this.handleMenuItemClick} >
                                                <a>  { array.title } </a>
                                                <span><i className="fa fa-arrow-right"></i></span>                                    
                                            </li>                                                    
                                } )}
                                 */}
                                
                            </ul>
                        </div>
                       
                       {/* Second Menu List Starts */}

                        <div className={ this.state.Menu_2 ? "MenuListItems-item-2 active" : "MenuListItems-item-2"}>
                            <ul>
                                <li className="back-btn-2" onClick={this.closeMenu_2} >
                                    <span> <i className="fa fa-arrow-left"></i> </span>
                                    <a>Back</a>
                                </li>                                
                                {this.state.temp}
                            </ul>
                        </div>
                </div>                 

        );
    }
}

export default MenuListItems;