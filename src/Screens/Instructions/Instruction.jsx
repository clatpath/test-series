import React, { useEffect, useState } from 'react';
import "./Instruction.css";

const Instruction = () => {
    const [ moreInstruction , SetMoreInstruction] = useState(false);
    const [ beginTest , setBeginTest] = useState(false);

    useEffect(() => {
        if(beginTest && moreInstruction) {
            document.getElementById("mIC").checked = true
        }
    })

    return (
        <>
        <div className="instructionGrid">
            <div className="instructionSection">
                {moreInstruction &&  <>
                <div className="instructionNavbar">
                    <h2>Other Important Instructions</h2>
                </div>
                <div className="instructionBody">
                    <p>This law entrance exam is of two hours duration. The CLAT question paper consists of 150 multiple choice questions. There are five sections in CLAT exam paper wherein students need to answer questions from subjects such as:</p><p>English including Comprehension</p><p>General Knowledge and Current Affairs</p><p>Elementary Mathematics (Numerical Ability)</p><p>Logical Reasoning</p><p>Legal Aptitude</p><p>Marking Scheme: For every correct answer, aspirants are given one mark and for each wrong answer 0.25 marks are deducted from their total score.</p>
                    <div className="moreInstructionMsg">
                        <div className="moreInstructionSelect">
                            <label>Choose your default language:</label>
                            <select>
                                <option value="english">English</option>
                            </select>
                        </div>
                        <i style={{color: "#e84545"}}>Please note all questions will appear in your default language. This language can be changed for a particular question later on.</i>
                        <div className="moreInstructionCheckbox">
                            <input id="mIC" type="checkbox" onChange={() => setBeginTest(!beginTest)} />
                            <p>
                            I have read and understood the instructions. All Computer Hardwares allotted to me are in proper working condition. I agree that I am not carrying any prohibited gadget like mobile phone etc. / any prohibited material with me into the exam hall.  I agree that in case of not adhering to the instructions, I will be disqualified from taking the exam
                            </p>
                        </div>
                    </div>
                </div>            
                </>
                }
                {!moreInstruction && <> 
                <div className="instructionNavbar">
                    <h2>Instruction</h2>
                </div>
                <div className="instructionData">
                    <div className="instructionHeadeer">
                        <div></div>
                        <h4>Please read the instruction carefully</h4>
                        <div>
                            <label>Select language:</label>
                            <select for="language">
                                <option name="language" value="English">English</option>
                            </select>
                        </div>
                    </div>
                    <div className="instructionBody">
                        <h3>A General Instructions</h3>
                        <ol>
                            <li>The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default- you are not required to end or submit your exam.</li>
                            <li>The question palette at the right of screen shows one of the following statuses of each of the questions numbered:</li>
                            <ul className="firstList">
                                <li><span className="notVisited">1</span>You have not visited the question yet.</li>
                                <li><span className="notAnswered">2</span>You have not answered the question.</li>
                                <li><span className="answered">3</span>You have answered the question.</li>
                                <li><span className="notAnsweredMark">4</span>You have not answered the question but have marked the question for review.</li>
                                <li><span className="answeredMark">5</span>You have answered the question but marked it for review.</li>
                                <li>The Marked for Review status simply acts as a reminder that you have set to look at the question again.
									<i>If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation.</i>
								</li>
                            </ul>
                        </ol>
                        <h3>B Navigating to a question:</h3>
				            <ol>
				            	<li>For multiple choice type question:
				                	<ol type="a">
										<li>Click on the question number on the question palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question. </li>
										<li>Click on Save and Next to save answer to current question and to go to the next question in sequence.</li>
										<li>Click on Mark for Review and Next to save answer to current question, mark it for review, and to go to the next question in sequence.</li>
									</ol>
				                </li>
				                <li>You can view the entire paper by clicking on the <b>Question Paper</b> button.</li>
				            </ol>
				            <h3>C Answering questions:</h3>
							<ol>
								<li>For multiple choice type question:
				                	<ol type="a">
										<li>To select your answer, click on one of the option buttons</li>
										<li>To change your answer, click the another desired option button</li>
										<li>To save your answer, you MUST click on <b>Save &amp; Next</b> </li>
										<li>To deselect a chosen answer, click on the chosen option again or click on the <b>Clear Response</b> button.</li>
										<li>To mark a question for review click on <b>Mark for Review &amp; Next</b>. <span class="Red">If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation.</span>
				                        </li>
									</ol>
								</li>
								<li>To change an answer to a question, first select the question and then click on the new answer option followed by a click on the <b>Save &amp; Next</b> button.</li>
								<li>Questions that are saved or marked for review after answering will ONLY be considered for evaluation.</li>
				            </ol>
				            <h3>D Navigating through sections:</h3>
				            <ol>
								<li>Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted.</li>
								<li>After clicking the <b>Save &amp; Next</b> button on the last question for a section, you will automatically be taken to the first question of the next section. </li>
								<li>You can move the mouse cursor over the section names to view the status of the questions for that section. </li>
								<li>You can shuffle between sections and questions anytime during the examination as per your convenience. </li>
							</ol>						
                    </div>
                </div>
                </> }
                
            </div>
            <div className="profileSection">
                <div className="Card">
                    <img src="https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <h4>Anand</h4>
                </div>
            </div>
        </div> 
        <div className="instructionFooter">
            {moreInstruction ?
            <div className="moreInstructionBtnGrp">
                <button className="prevBtn" onClick={() => SetMoreInstruction(false)}>Previous</button>    
                <button className={beginTest ? "beginTestBtn-active" : "beginTestBtn" }>Begin Test</button>    
            </div>
             : 
            <button className="nextBtn" onClick={() => SetMoreInstruction(true)}>Next</button>
            }
        </div>
        </>
    );
};

export default Instruction;