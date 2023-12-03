import React from "react";
import '../App.css';
import './AboutUsContent.css';
import { Button } from './Button';
function aboutUsContent(){
    return(
        <div className = "about-us-content">
        <div className = "section">
            <h2> History</h2>
            <p>
                Located 15 miles east of Lansing and situated near I-96, Williamston is a small town that has networks to the
                greater Michigan area. The town was founded in 1839 by Oswald, James, and Howard Williams, and became a famous
                and convenient overnight stop for those traveling from Detroit to Michigan. The town was officially recognized
                as a city on April 1, 1945, and a city charter was adopted in 1963. The charter is still in use to this day.
            </p>
            <img src="../../public/images.../image7.jpg"></img>
        </div>
        <div className = "section">
            <h2> Economy</h2>
            <p>
            Today, Williamston is well known to the mid-Michigan area for its antiques stores and specialty shops in 
            the downtown area. Williamston is home to two golf courses, The Brookshire Restaurant and Golf Course and 
            Wheatfield Valley Golf Course, as well as two theaters: the Williamston Theater and the Sun Theater. The city also provides 
            a wide range of shops ranging from clothing stores, restaurants, grocery stores, and special interest shops. The largest employer in the City is the Williamston Community Schools with 170 employees.
            </p>
            <img src="../../public/images.../Memorial_Day_Parade,_Williamston,_Michigan.jpg"></img>
        </div>
        <div className = "section">
            <h2> Local Government</h2>
            <p>
            By charter, the city is locally governed by a seven-member city council as well as an appointed city manager. Within the council,
            four seats are ran by two-year elections, and the city council is responsible for all legislative and other policy decisions in the town.
            Additionally, the mayor and mayor pro-tempore are nominated by the council members at the last meeting of the calendar year.
            Other city branches include a Downtown Development Authority, an Economic Development Corporation, and a Planning Commission.
            Williamston also includes city departments such as the Police Department, the Department of Public Works, Assessing Department,
            and Building Department. 
            </p>
        </div>
        </div>
    );
}
export default aboutUsContent;