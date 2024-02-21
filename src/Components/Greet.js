import { useState, react } from "react"

export const Greet = (props) => {

    const [input, setInput] = useState();

    const { name, heroName } = props
    // console.log(props)
    return (
        <>
            {/* <p>Props </p> */}
            {/* <h1>Functional Component</h1> */}
            {/* <h2>Hiii {name} and also {heroName}</h2> */}
           
            <table>
                  <tbody>
                    <tr className="table-head ">
                      <th>
                        <label className="checkbox-container">
                          <input type="checkbox" id="main_box" />
                          <span className="mark">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.0002 1.85403L4.80016 11.25L0.583496 6.94351L1.6645 5.83949L4.80016 9.03412L12.9192 0.75L14.0002 
              1.85403Z" fill="white"></path>
                            </svg>
                          </span>
                        </label>
                      </th>
                      <th>
                        <span className="table-heading flex-cnt">List Name</span>
                      </th>
                      <th>
                        <span className="table-heading flex-cnt"> Date </span>
                      </th>
                      <th>
                        <span className="table-heading flex-cnt">
                          Leads
                        </span>
                      </th>
                      <th className="th-chats">
                        <span className="table-heading flex-cnt ">
                          Source
                        </span>
                      </th>

                      <th>
                        <span className="table-heading flex-cnt">
                          Actions
                        </span>
                      </th>
                    </tr>
                    <tr className="menu-bar ">
                      <td>
                        <label className="checkbox-container">
                          <input className="bot-check" type="checkbox" />
                          <span className="mark">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.0002 1.85403L4.80016 11.25L0.583496 6.94351L1.6645 5.83949L4.80016 9.03412L12.9192 0.75L14.0002 1.85403Z" fill="white">
                              </path>
                            </svg>
                          </span>
                        </label>
                      </td>
                      <td>
                        <div className="name-wrapper">
                          <h2>Omni</h2>
                        </div>
                      </td>

                      <td className="th-chats disabled">
                        <a href="/dashboard">
                          <img src="https://res.cloudinary.com/dnag1wvx8/image/upload/v1647503714/Vector23_dh5oz0.svg" alt="" />
                        </a>
                      </td>
                      <td className="th-chats disabled"><a href="/dashboard">
                        <img src="https://res.cloudinary.com/dnag1wvx8/image/upload/v1659343838/engage/Vector_2_j4dk8f.svg" alt="" />
                      </a>
                      </td>
                      <td className="th-source"><div className="table-sources fx">
                        <span className="draft-status"><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#FB5F66">
                          </circle>
                        </svg>
                          Draft
                        </span>
                      </div>
                      </td>
                      <td>
                        <div className="hover-icons">
                          <div className="hov-duplicate">
                            <img src="https://res.cloudinary.com/dghqyted6/image/upload/v1668494516/Vector_zln9la.svg" alt="" />
                            <div className="hov-tps-dupli">
                              <span className="tooltip-text">Duplicate</span>
                            </div>
                          </div>
                          <div className="hov-del">
                            <img src="https://res.cloudinary.com/dnag1wvx8/image/upload/v1659345292/engage/trash_2_wqkzbw.svg" alt="" />
                            <div className="hov-tps"><span className="tooltip-text">
                              Delete
                            </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="menu-bar ">
                      <td>
                        <label className="checkbox-container">
                          <input className="bot-check" type="checkbox" />
                          <span className="mark">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.0002 1.85403L4.80016 11.25L0.583496 6.94351L1.6645 5.83949L4.80016 9.03412L12.9192 
                               0.75L14.0002 1.85403Z" fill="white"></path>
                            </svg>
                          </span>
                        </label>
                      </td>
                      <td>
                        <div className="name-wrapper">

                          <h2>Omni</h2>
                        </div>
                      </td>

                      <td className="th-chats disabled">
                        <a href="/dashboard">
                          <img src="https://res.cloudinary.com/dnag1wvx8/image/upload/v1647503714/Vector23_dh5oz0.svg" alt="" />
                        </a>
                      </td>
                      <td className="th-chats disabled">
                        <a href="/dashboard">
                          <img src="https://res.cloudinary.com/dnag1wvx8/image/upload/v1659343838/engage/Vector_2_j4dk8f.svg" alt="" />
                        </a>
                      </td>
                      <td className="th-source">
                        <div className="table-sources fx">
                          <span className="draft-status">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#FB5F66"></circle></svg>
                            User
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="hover-icons">
                          <div className="hov-duplicate">
                            <img src="https://res.cloudinary.com/dghqyted6/image/upload/v1668494516/Vector_zln9la.svg" alt="" />
                            <div className="hov-tps-dupli">
                              <span className="tooltip-text">
                                Duplicate
                              </span>
                            </div>
                          </div>
                          <div className="hov-del">
                            <img src="https://res.cloudinary.com/dnag1wvx8/image/upload/v1659345292/engage/trash_2_wqkzbw.svg" alt="" />
                            <div className="hov-tps">
                              <span className="tooltip-text">Delete</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
        </>


    )
}

export default Greet