import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const LightTheme = () => {
  return (
    <View style={styles.lightTheme}>
      <View style={[styles.account1, styles.emptyLayout]}>
        <View style={styles.account}>
          <Image
            style={[styles.vectorIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.vectorIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/account-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <View style={[styles.cell, styles.iconPosition4]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View style={[styles.cell1, styles.cellPosition2]}>
                    <Image
                      style={[styles.cellChild, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-53.png")}
                    />
                    <Text style={[styles.favourite, styles.textTypo6]}>
                      Favourite
                    </Text>
                    <Image
                      style={[styles.iconarrowright, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconarrowright.png")}
                    />
                  </View>
                  <View style={[styles.cell2, styles.cellPosition2]}>
                    <Image
                      style={[styles.cellItem, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-531.png")}
                    />
                    <Text style={[styles.favourite, styles.textTypo6]}>
                      Edit Account
                    </Text>
                    <Image
                      style={[styles.iconarrowright, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconarrowright1.png")}
                    />
                  </View>
                  <View style={[styles.cell3, styles.cellPosition2]}>
                    <Image
                      style={[styles.cellInner, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-532.png")}
                    />
                    <Text style={[styles.favourite, styles.textTypo6]}>
                      Settings and Privacy
                    </Text>
                    <Image
                      style={[styles.iconarrowright, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconarrowright2.png")}
                    />
                  </View>
                  <View style={[styles.cell4, styles.cellPosition2]}>
                    <Image
                      style={[styles.rectangleIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-533.png")}
                    />
                    <Text style={[styles.favourite, styles.textTypo6]}>
                      Help
                    </Text>
                    <Image
                      style={[styles.iconarrowright, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconarrowright3.png")}
                    />
                  </View>
                </View>
              </View>
              <Image
                style={[styles.avatarIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/avatar.png")}
              />
              <View style={[styles.title, styles.titlePosition5]}>
                <Text style={[styles.account2, styles.textTypo5]}>Account</Text>
              </View>
              <Image
                style={[styles.statusIcon, styles.statusIconLayout]}
                resizeMode="cover"
                source={require("../assets/status.png")}
              />
              <View style={[styles.footermessage, styles.footerPosition]}>
                <Image
                  style={[
                    styles.footermessageBackgroundIcon,
                    styles.backgroundIconLayout1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/footermessage-background.png")}
                />
                <Image
                  style={[styles.unionIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/union.png")}
                />
                <View style={styles.search}>
                  <Text style={styles.search1}>Search</Text>
                  <Image
                    style={[styles.searchChild, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-18.png")}
                  />
                  <Image
                    style={[styles.iconsearch, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconsearch.png")}
                  />
                </View>
                <View style={[styles.footeron, styles.footeroffPosition]}>
                  <Image
                    style={[
                      styles.footeronBackgroundIcon,
                      styles.footeronIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeron-background.png")}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                  <Image
                    style={[styles.iconfooterhomeoff, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconfooterhomeoff.png")}
                  />
                </View>
                <View style={[styles.footeroff, styles.text44Position]}>
                  <Image
                    style={[
                      styles.footeroffBackgroundIcon,
                      styles.footeroffIconLayout2,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeroff-background.png")}
                  />
                  <Text style={[styles.course, styles.courseTypo]}>Course</Text>
                  <Image
                    style={[styles.iconfootercourseoff, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconfootercourseoff.png")}
                  />
                </View>
                <View style={[styles.footeroff1, styles.footeroffPosition]}>
                  <Image
                    style={[
                      styles.footeroffBackgroundIcon1,
                      styles.footeroffIconLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeroff-background1.png")}
                  />
                  <Text style={[styles.course, styles.courseTypo]}>
                    Message
                  </Text>
                  <Image
                    style={[
                      styles.iconfooternotificationoff,
                      styles.iconfootercourseonLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/iconfooternotificationoff.png")}
                  />
                </View>
                <View style={[styles.footeroff2, styles.footeroffPosition]}>
                  <Image
                    style={[
                      styles.footeroffBackgroundIcon2,
                      styles.footeroffIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeroff-background2.png")}
                  />
                  <Text style={[styles.account3, styles.courseTypo]}>
                    Account
                  </Text>
                  <Image
                    style={[styles.iconfooteraccounton, styles.text80Position]}
                    resizeMode="cover"
                    source={require("../assets/iconfooteraccounton.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.clockIn1, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/clock-in-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <Image
                style={[styles.unionIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/model.png")}
              />
              <Image
                style={[styles.buttonIcon, styles.iconLayout8]}
                resizeMode="cover"
                source={require("../assets/button.png")}
              />
              <View style={[styles.overlay, styles.overlayPosition]}>
                <Image
                  style={[styles.unionIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/bg.png")}
                />
                <View
                  style={[styles.learnedToday, styles.learnedTodayPosition]}
                >
                  <Text style={styles.learnedToday1}>Learned today</Text>
                  <View style={[styles.time, styles.timePosition1]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <Text style={[styles.text, styles.textTypo4]}>46</Text>
                      <Text style={[styles.min, styles.minPosition]}>min</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.totallyHours, styles.learnedTodayPosition]}
                >
                  <Text style={styles.learnedToday1}>totally hours</Text>
                  <View style={[styles.time1, styles.timePosition1]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <Text style={[styles.text, styles.textTypo4]}>468</Text>
                      <Text style={[styles.hrs, styles.minPosition]}>hrs</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.totallyDays}>
                  <Text style={styles.learnedToday1}>Totally days</Text>
                  <View style={[styles.time2, styles.timePosition1]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <Text style={[styles.text, styles.textTypo4]}>554</Text>
                      <Text style={[styles.days, styles.minPosition]}>
                        days
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.text3, styles.text3Position]}>
                  <Text style={[styles.goodJob, styles.textTypo3]}>
                    GOOD JOB!
                  </Text>
                  <Text style={[styles.account2, styles.textTypo5]}>
                    Clocking in!
                  </Text>
                </View>
                <View style={[styles.button, styles.buttonPosition2]}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/buttonprimary-background.png")}
                    />
                    <View style={[styles.shareWrapper, styles.wrapperPosition]}>
                      <Text style={[styles.share, styles.textTypo6]}>
                        Share
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.text4}>
                  <Text style={styles.recordOfThis}>Record of this week</Text>
                </View>
                <View style={[styles.recorder, styles.buttonPosition2]}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <View
                      style={[styles.vectorParent, styles.groupParentPosition1]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-20.png")}
                      />
                      <Text style={[styles.text5, styles.textPosition3]}>
                        1
                      </Text>
                    </View>
                    <View
                      style={[styles.vectorGroup, styles.groupParentPosition1]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-201.png")}
                      />
                      <Text style={[styles.text6, styles.textPosition3]}>
                        2
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.vectorContainer,
                        styles.groupParentPosition1,
                      ]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-202.png")}
                      />
                      <Text style={[styles.text7, styles.textPosition3]}>
                        3
                      </Text>
                    </View>
                    <View
                      style={[styles.groupView, styles.groupParentPosition1]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-203.png")}
                      />
                      <Text style={[styles.text8, styles.textPosition3]}>
                        4
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.vectorParent1,
                        styles.groupParentPosition1,
                      ]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-204.png")}
                      />
                      <Text style={[styles.text9, styles.textPosition3]}>
                        5
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.vectorParent2,
                        styles.groupParentPosition1,
                      ]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-205.png")}
                      />
                      <Text style={[styles.text10, styles.textPosition3]}>
                        6
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.vectorParent3,
                        styles.groupParentPosition1,
                      ]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-206.png")}
                      />
                      <Text style={[styles.text11, styles.textPosition2]}>
                        7
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.courseDetails1, styles.emptyLayout]}>
        <View style={styles.courseDetails}>
          <Image
            style={[styles.vectorIcon2, styles.iconLayout7]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.vectorIcon2, styles.iconLayout7]}
              resizeMode="cover"
              source={require("../assets/course-details-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <Image
                style={[styles.bgIcon1, styles.iconLayout6]}
                resizeMode="cover"
                source={require("../assets/bg1.png")}
              />
              <View style={styles.ads}>
                <Image
                  style={[styles.illustrationIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/illustration.png")}
                />
                <Image
                  style={[styles.illustrationIcon1, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/illustration1.png")}
                />
                <View style={[styles.name, styles.tagPosition]}>
                  <Text style={[styles.productdesignV10, styles.textTypo4]}>
                    ProductDesign v1.0
                  </Text>
                </View>
                <View style={[styles.tag, styles.tagPosition]}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-43.png")}
                  />
                  <Text style={styles.bestseller}>BESTSELLER</Text>
                </View>
              </View>
              <View style={[styles.details, styles.detailsPosition]}>
                <Image
                  style={[styles.unionIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/bg2.png")}
                />
                <View style={styles.button1}>
                  <Image
                    style={[styles.groupIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group.png")}
                  />
                  <View
                    style={[styles.buttonprimary1, styles.buttonIcon1Position]}
                  >
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/buttonprimary-background1.png")}
                    />
                    <View
                      style={[styles.buyNowWrapper, styles.wrapperPosition]}
                    >
                      <Text style={[styles.share, styles.textTypo6]}>
                        Buy Now
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.buttonIcon1, styles.title5Position]}
                    resizeMode="cover"
                    source={require("../assets/button1.png")}
                  />
                </View>
                <View style={[styles.courseList, styles.cellsPosition]}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <View style={[styles.list, styles.listPosition]}>
                      <Image
                        style={[
                          styles.listBackgroundIcon,
                          styles.iconPosition3,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/list-background.png")}
                      />
                      <Text
                        style={[styles.text12, styles.textTypo6]}
                      >{`01 `}</Text>
                      <View
                        style={[
                          styles.courseContent,
                          styles.courseContentPosition,
                        ]}
                      >
                        <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                          Welcome to the Course
                        </Text>
                        <View style={[styles.time3, styles.timePosition]}>
                          <Text style={[styles.text13, styles.textTypo6]}>
                            6:10
                          </Text>
                          <Text style={[styles.mins, styles.minsTypo]}>
                            mins
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.buttonplayIcon,
                          styles.listChildPosition,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/buttonplay.png")}
                      />
                      <Image
                        style={[styles.iconDone, styles.iconcloseLayout]}
                        resizeMode="cover"
                        source={require("../assets/icondone.png")}
                      />
                    </View>
                    <View style={[styles.list1, styles.listPosition]}>
                      <Image
                        style={[
                          styles.listBackgroundIcon1,
                          styles.iconPosition3,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/list-background1.png")}
                      />
                      <Text
                        style={[styles.text12, styles.textTypo6]}
                      >{`02 `}</Text>
                      <View
                        style={[
                          styles.courseContent1,
                          styles.courseContentPosition,
                        ]}
                      >
                        <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                          Process overview
                        </Text>
                        <View style={[styles.time4, styles.timePosition]}>
                          <Text style={[styles.text15, styles.textTypo6]}>
                            6:10
                          </Text>
                          <Text style={[styles.mins1, styles.minsTypo]}>
                            mins
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.buttonplayIcon,
                          styles.listChildPosition,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/buttonplay1.png")}
                      />
                    </View>
                    <View style={[styles.list2, styles.listPosition]}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <Image
                          style={[
                            styles.component1Background,
                            styles.iconPosition3,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/component-1-background.png")}
                        />
                        <Text
                          style={[styles.text12, styles.textTypo6]}
                        >{`03 `}</Text>
                        <View
                          style={[
                            styles.courseContent2,
                            styles.courseContentPosition,
                          ]}
                        >
                          <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                            Discovery
                          </Text>
                          <View style={[styles.time5, styles.timePosition]}>
                            <Text style={[styles.text15, styles.textTypo6]}>
                              6:10
                            </Text>
                            <Text style={[styles.mins1, styles.minsTypo]}>
                              mins
                            </Text>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.buttonplayIcon,
                            styles.listChildPosition,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/buttonplay2.png")}
                        />
                      </View>
                      <Image
                        style={[styles.lockIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/lock.png")}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.icon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon.png")}
                />
                <View style={styles.about}>
                  <Text style={[styles.aboutThisCourse, styles.textTypo5]}>
                    About this course
                  </Text>
                  <Text
                    style={styles.sedUtPerspiciatis}
                  >{`Sed ut perspiciatis unde omnis iste natus error sit 
voluptatem accusantium doloremque laudantium, `}</Text>
                </View>
                <View style={[styles.title1, styles.pricePosition2]}>
                  <Text style={[styles.h14min, styles.h14minTypo]}>
                    6h 14min · 24 Lessons
                  </Text>
                  <Text style={[styles.productdesignV10, styles.textTypo4]}>
                    Product Design v1.0
                  </Text>
                </View>
                <View style={[styles.price, styles.pricePosition2]}>
                  <Text style={[styles.text18, styles.textTypo4]}>$74.00</Text>
                </View>
              </View>
              <Image
                style={[styles.navigationBarIcon, styles.maskGroupPosition]}
                resizeMode="cover"
                source={require("../assets/navigation-bar.png")}
              />
              <Image
                style={[styles.statusIcon1, styles.iconLayout7]}
                resizeMode="cover"
                source={require("../assets/status1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.coursePlaying1, styles.emptyLayout]}>
        <View style={styles.coursePlaying}>
          <Image
            style={[styles.vectorIcon3, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.vectorIcon3, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/course-playing-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <Image
                style={[styles.illustrationIcon2, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/illustration2.png")}
              />
              <Image
                style={[styles.vectorIcon3, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/model1.png")}
              />
              <View style={[styles.details1, styles.iconPosition1]}>
                <Image
                  style={[styles.unionIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/bg3.png")}
                />
                <Image
                  style={[styles.icon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
                <View style={styles.about}>
                  <Text style={[styles.aboutThisCourse, styles.textTypo5]}>
                    About this course
                  </Text>
                  <Text
                    style={styles.sedUtPerspiciatis}
                  >{`Sed ut perspiciatis unde omnis iste natus error sit 
voluptatem accusantium doloremque laudantium, `}</Text>
                </View>
                <View style={[styles.title1, styles.pricePosition2]}>
                  <Text style={[styles.h14min, styles.h14minTypo]}>
                    6h 14min · 24 Lessons
                  </Text>
                  <Text style={[styles.productdesignV10, styles.textTypo4]}>
                    Product Design v1.0
                  </Text>
                </View>
                <View style={[styles.price, styles.pricePosition2]}>
                  <Text style={[styles.text18, styles.textTypo4]}>$74.00</Text>
                </View>
                <View style={[styles.courseList, styles.cellsPosition]}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <View style={[styles.list, styles.listPosition]}>
                      <Image
                        style={[
                          styles.listBackgroundIcon,
                          styles.iconPosition3,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/list-background2.png")}
                      />
                      <Text
                        style={[styles.text12, styles.textTypo6]}
                      >{`01 `}</Text>
                      <View
                        style={[
                          styles.courseContent,
                          styles.courseContentPosition,
                        ]}
                      >
                        <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                          Welcome to the Course
                        </Text>
                        <View style={[styles.time3, styles.timePosition]}>
                          <Text style={[styles.text21, styles.textTypo6]}>
                            6:10
                          </Text>
                          <Text style={[styles.mins3, styles.minsTypo]}>
                            mins
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={[
                          styles.buttonplayIcon,
                          styles.listChildPosition,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/buttonplay3.png")}
                      />
                      <Image
                        style={[styles.iconDone, styles.iconcloseLayout]}
                        resizeMode="cover"
                        source={require("../assets/icondone1.png")}
                      />
                    </View>
                    <View style={[styles.list1, styles.listPosition]}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <Image
                          style={[
                            styles.listBackgroundIcon1,
                            styles.iconPosition3,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/list-background3.png")}
                        />
                        <Text
                          style={[styles.text12, styles.textTypo6]}
                        >{`02 `}</Text>
                        <View
                          style={[
                            styles.courseContent1,
                            styles.courseContentPosition,
                          ]}
                        >
                          <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                            Process overview
                          </Text>
                          <View style={[styles.time4, styles.timePosition]}>
                            <Text style={[styles.text15, styles.textTypo6]}>
                              6:10
                            </Text>
                            <Text style={[styles.mins1, styles.minsTypo]}>
                              mins
                            </Text>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.buttonplayIcon,
                            styles.listChildPosition,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/buttonplay4.png")}
                        />
                      </View>
                      <Image
                        style={[styles.listChild, styles.listChildPosition]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-23.png")}
                      />
                      <Image
                        style={[styles.iconpause, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/iconpause.png")}
                      />
                    </View>
                    <View style={[styles.list2, styles.listPosition]}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <Image
                          style={[
                            styles.component1Background,
                            styles.iconPosition3,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/component-1-background1.png")}
                        />
                        <Text
                          style={[styles.text12, styles.textTypo6]}
                        >{`03 `}</Text>
                        <View
                          style={[
                            styles.courseContent2,
                            styles.courseContentPosition,
                          ]}
                        >
                          <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                            Discovery
                          </Text>
                          <View style={[styles.time5, styles.timePosition]}>
                            <Text style={[styles.text15, styles.textTypo6]}>
                              6:10
                            </Text>
                            <Text style={[styles.mins1, styles.minsTypo]}>
                              mins
                            </Text>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.buttonplayIcon,
                            styles.listChildPosition,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/buttonplay5.png")}
                        />
                      </View>
                      <Image
                        style={[styles.lockIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/lock1.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.button1}>
                  <Image
                    style={[styles.groupIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group1.png")}
                  />
                  <View
                    style={[styles.buttonprimary1, styles.buttonIcon1Position]}
                  >
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/buttonprimary-background2.png")}
                    />
                    <View
                      style={[styles.buyNowWrapper, styles.wrapperPosition]}
                    >
                      <Text style={[styles.share, styles.textTypo6]}>
                        Buy Now
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.buttonIcon1, styles.title5Position]}
                    resizeMode="cover"
                    source={require("../assets/button2.png")}
                  />
                </View>
              </View>
              <View style={styles.elements}>
                <Image
                  style={[styles.icon2, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
                <Image
                  style={[styles.lineIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/line.png")}
                />
                <Image
                  style={[styles.elementsChild, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-140.png")}
                />
                <View style={[styles.time9, styles.time9Position]}>
                  <Text style={styles.text26}>4:10</Text>
                  <Text style={styles.text27}>6:10</Text>
                </View>
              </View>
              <Image
                style={[styles.buttonIcon3, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/button3.png")}
              />
              <Image
                style={[styles.navigationBarIcon1, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/navigation-bar1.png")}
              />
              <Image
                style={[styles.statusIcon2, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/status2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.courses1, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/courses-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <View style={styles.courses2}>
                <View style={styles.title3}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <Image
                      style={[
                        styles.titleBackgroundIcon,
                        styles.iconItemLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/title-background.png")}
                    />
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-26.png")}
                    />
                    <Text style={[styles.choiceYourCourse, styles.text57Typo]}>
                      Choice your course
                    </Text>
                    <Text style={[styles.seeAll, styles.textTypo3]}>
                      See all
                    </Text>
                  </View>
                </View>
                <View style={[styles.tabs, styles.tabsLayout]}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <View style={[styles.tabon, styles.taboffPosition]}>
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/tabon-background.png")}
                      />
                      <Text style={[styles.all, styles.allTypo]}>All</Text>
                    </View>
                    <View style={[styles.taboff, styles.taboffPosition]}>
                      <Image
                        style={[
                          styles.taboffBackgroundIcon,
                          styles.taboffIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/taboff-background.png")}
                      />
                      <View style={styles.accountBackgroundmaskParent}>
                        <Image
                          style={[styles.unionIcon, styles.iconItemLayout]}
                          resizeMode="cover"
                          source={require("../assets/tabon-background1.png")}
                        />
                        <Text style={[styles.poular, styles.allTypo]}>
                          Poular
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.taboff1, styles.taboffPosition]}>
                      <Image
                        style={[
                          styles.taboffBackgroundIcon1,
                          styles.taboffIconLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/taboff-background1.png")}
                      />
                      <View style={styles.accountBackgroundmaskParent}>
                        <Image
                          style={[styles.unionIcon, styles.iconItemLayout]}
                          resizeMode="cover"
                          source={require("../assets/tabon-background2.png")}
                        />
                        <Text style={[styles.new, styles.allTypo]}>New</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.courseList4, styles.cellsPosition]}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <View style={[styles.courseList5, styles.coursePosition]}>
                      <Image
                        style={[styles.groupIcon2, styles.groupIconPosition1]}
                        resizeMode="cover"
                        source={require("../assets/group2.png")}
                      />
                      <Image
                        style={[styles.imageIcon, styles.textPosition1]}
                        resizeMode="cover"
                        source={require("../assets/image.png")}
                      />
                      <Text style={styles.productDesignV102}>
                        Product Design v1.0
                      </Text>
                      <Text style={styles.robertsonConnie}>
                        Robertson Connie
                      </Text>
                      <Image
                        style={[styles.iconpeople, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/iconpeople.png")}
                      />
                      <View style={[styles.priceParent, styles.pricePosition1]}>
                        <View style={styles.price2}>
                          <Text style={[styles.text28, styles.textTypo5]}>
                            $
                          </Text>
                          <Text style={[styles.text29, styles.textTypo5]}>
                            190
                          </Text>
                        </View>
                        <View
                          style={[styles.duration, styles.durationPosition]}
                        >
                          <Image
                            style={[
                              styles.durationBackgroundIcon,
                              styles.iconItemLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/duration-background.png")}
                          />
                          <Text style={[styles.hours, styles.min2Typo]}>
                            16 hours
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.courseList6, styles.coursePosition]}>
                      <Image
                        style={[styles.groupIcon2, styles.groupIconPosition1]}
                        resizeMode="cover"
                        source={require("../assets/group3.png")}
                      />
                      <Image
                        style={[styles.imageIcon, styles.textPosition1]}
                        resizeMode="cover"
                        source={require("../assets/image1.png")}
                      />
                      <Text style={styles.productDesignV102}>
                        Java Development
                      </Text>
                      <Text style={styles.robertsonConnie}>Nguyen Shane</Text>
                      <Image
                        style={[styles.iconpeople, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/iconpeople1.png")}
                      />
                      <View style={[styles.priceParent, styles.pricePosition1]}>
                        <View style={styles.price2}>
                          <Text style={[styles.text28, styles.textTypo5]}>
                            $
                          </Text>
                          <Text style={[styles.text29, styles.textTypo5]}>
                            190
                          </Text>
                        </View>
                        <View
                          style={[styles.duration, styles.durationPosition]}
                        >
                          <Image
                            style={[
                              styles.durationBackgroundIcon,
                              styles.iconItemLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/duration-background1.png")}
                          />
                          <Text style={[styles.hours, styles.min2Typo]}>
                            16 hours
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.courseList7, styles.coursePosition]}>
                      <Image
                        style={[styles.groupIcon2, styles.groupIconPosition1]}
                        resizeMode="cover"
                        source={require("../assets/group4.png")}
                      />
                      <Image
                        style={[styles.imageIcon, styles.textPosition1]}
                        resizeMode="cover"
                        source={require("../assets/image2.png")}
                      />
                      <Text style={styles.productDesignV102}>
                        Visual Design
                      </Text>
                      <Text style={styles.robertsonConnie}>Bert Pullman</Text>
                      <Image
                        style={[styles.iconpeople, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/iconpeople2.png")}
                      />
                      <View
                        style={[styles.priceContainer, styles.pricePosition1]}
                      >
                        <View style={styles.price4}>
                          <Text style={[styles.text28, styles.textTypo5]}>
                            $
                          </Text>
                          <Text style={[styles.text33, styles.textTypo5]}>
                            250
                          </Text>
                        </View>
                        <View
                          style={[styles.duration2, styles.durationPosition]}
                        >
                          <Image
                            style={[
                              styles.durationBackgroundIcon,
                              styles.iconItemLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/duration-background2.png")}
                          />
                          <Text style={[styles.hours, styles.min2Typo]}>
                            14 hours
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.footer, styles.footerPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.footercourseBackgroundIcon,
                      styles.backgroundIconLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footercourse-background.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/union1.png")}
                  />
                  <View style={styles.search}>
                    <Text style={styles.search1}>Search</Text>
                    <Image
                      style={[styles.searchChild, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-181.png")}
                    />
                    <Image
                      style={[styles.iconsearch, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconsearch1.png")}
                    />
                  </View>
                  <View style={[styles.footeron, styles.footeroffPosition]}>
                    <Image
                      style={[
                        styles.footeronBackgroundIcon1,
                        styles.footeronIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeron-background1.png")}
                    />
                    <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                    <Image
                      style={[styles.iconfooterhomeoff, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconfooterhomeoff1.png")}
                    />
                  </View>
                  <View style={[styles.footeroff, styles.text44Position]}>
                    <Image
                      style={[
                        styles.footeroffBackgroundIcon3,
                        styles.footeroffIconLayout2,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeroff-background3.png")}
                    />
                    <Image
                      style={[styles.footeroffChild, styles.childPosition]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-19.png")}
                    />
                    <Text style={[styles.account3, styles.courseTypo]}>
                      Course
                    </Text>
                    <Image
                      style={[
                        styles.iconfootercourseon,
                        styles.iconfootercourseonLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconfootercourseon.png")}
                    />
                  </View>
                  <View style={[styles.footeroff1, styles.footeroffPosition]}>
                    <Image
                      style={[
                        styles.footeroffBackgroundIcon4,
                        styles.footeroffIconLayout1,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeroff-background4.png")}
                    />
                    <Text style={[styles.course, styles.courseTypo]}>
                      Message
                    </Text>
                    <Image
                      style={[
                        styles.iconfooternotificationoff,
                        styles.iconfootercourseonLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconfooternotificationoff1.png")}
                    />
                  </View>
                  <View style={[styles.footeroff2, styles.footeroffPosition]}>
                    <Image
                      style={[
                        styles.footeroffBackgroundIcon5,
                        styles.footeroffIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeroff-background5.png")}
                    />
                    <Text style={[styles.course, styles.courseTypo]}>
                      Account
                    </Text>
                    <Image
                      style={[
                        styles.iconfooteraccounton,
                        styles.text80Position,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconfooteraccountoff.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.recommendations, styles.cellsPosition]}>
                <View style={[styles.ads1, styles.adsPosition]}>
                  <Image
                    style={[styles.bgIcon4, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg4.png")}
                  />
                  <Image
                    style={[styles.illustrationIcon3, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/illustration3.png")}
                  />
                  <View style={[styles.name1, styles.iconPosition4]}>
                    <Image
                      style={[styles.nameChild, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-83.png")}
                    />
                    <Text style={[styles.painting, styles.textTypo3]}>
                      Painting
                    </Text>
                  </View>
                </View>
                <View style={[styles.ads2, styles.adsPosition]}>
                  <Image
                    style={[styles.bgIcon4, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg5.png")}
                  />
                  <Image
                    style={[styles.illustrationIcon4, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/illustration4.png")}
                  />
                  <View style={styles.name2}>
                    <Image
                      style={[styles.nameItem, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-82.png")}
                    />
                    <Text style={[styles.languege, styles.textTypo3]}>
                      Languege
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.searchBar, styles.searchBarPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/search-background.png")}
                  />
                  <Text style={[styles.findCousre, styles.findCousrePosition]}>
                    Find Cousre
                  </Text>
                  <Image
                    style={[styles.iconsearch2, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconsearch2.png")}
                  />
                  <Image
                    style={[styles.iconfilter, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconfilter.png")}
                  />
                </View>
              </View>
              <View style={[styles.title5, styles.title5Position]}>
                <Text style={[styles.account2, styles.textTypo5]}>Course</Text>
              </View>
              <Image
                style={[styles.statusIcon3, styles.statusIconLayout]}
                resizeMode="cover"
                source={require("../assets/status3.png")}
              />
              <Image
                style={[styles.avatarIcon1, styles.avatarIcon1Position]}
                resizeMode="cover"
                source={require("../assets/avatar1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.empty01, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/empty-01-backgroundmask.png")}
            />
            <View style={styles.maskGroup29}>
              <Text style={[styles.noNotifictationsYet, styles.textTypo6]}>
                No Notifictations yet!
              </Text>
              <Text
                style={styles.wellNofifyYou}
              >{`We’ll nofify you once we have 
something for you `}</Text>
              <Image
                style={[styles.maskGroup29Child, styles.maskChildPosition]}
                resizeMode="cover"
                source={require("../assets/frame-30.png")}
              />
              <Image
                style={[
                  styles.illustrationIcon5,
                  styles.illustrationIconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/illustration5.png")}
              />
              <Image
                style={[styles.navigationIcon, styles.iconLayout5]}
                resizeMode="cover"
                source={require("../assets/navigation.png")}
              />
              <Image
                style={[styles.statusIcon4, styles.iconLayout5]}
                resizeMode="cover"
                source={require("../assets/status4.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.empty02, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/empty-02-backgroundmask.png")}
            />
            <View style={styles.maskGroup28}>
              <Text style={[styles.noNetwork, styles.noVideosTypo]}>
                No Network!
              </Text>
              <Text
                style={[styles.pleaseCheckYour, styles.hereIsNoTypo]}
              >{`Please check your internet 
connection and try again`}</Text>
              <Image
                style={[styles.maskGroup28Child, styles.maskChildPosition]}
                resizeMode="cover"
                source={require("../assets/frame-301.png")}
              />
              <Image
                style={[
                  styles.illustrationIcon6,
                  styles.illustrationIconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/illustration6.png")}
              />
              <View style={styles.button3}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background3.png")}
                  />
                  <View
                    style={[styles.tryAgainWrapper, styles.wrapperPosition]}
                  >
                    <Text style={[styles.share, styles.textTypo6]}>
                      Try again
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.navigationIcon1, styles.iconLayout4]}
                resizeMode="cover"
                source={require("../assets/navigation1.png")}
              />
              <Image
                style={[styles.statusIcon5, styles.iconLayout4]}
                resizeMode="cover"
                source={require("../assets/status5.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.empty03, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/empty-03-backgroundmask.png")}
            />
            <View style={styles.maskGroup28}>
              <Text style={[styles.noVideos, styles.noVideosTypo]}>
                No videos!
              </Text>
              <Text
                style={[styles.hereIsNo, styles.hereIsNoTypo]}
              >{`Here is no video you want at the 
moment`}</Text>
              <View style={styles.button3}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background4.png")}
                  />
                  <View
                    style={[styles.searchMoreWrapper, styles.wrapperPosition]}
                  >
                    <Text style={[styles.share, styles.textTypo6]}>
                      Search more
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.illustrationIcon6,
                  styles.illustrationIconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/illustration7.png")}
              />
              <Image
                style={[styles.navigationIcon1, styles.iconLayout4]}
                resizeMode="cover"
                source={require("../assets/navigation2.png")}
              />
              <Image
                style={[styles.statusIcon5, styles.iconLayout4]}
                resizeMode="cover"
                source={require("../assets/status6.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.empty04, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/empty-04-backgroundmask.png")}
            />
            <View style={styles.maskGroup26}>
              <Image
                style={[styles.navigationIcon3, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../assets/navigation3.png")}
              />
              <Image
                style={[styles.statusIcon7, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../assets/status7.png")}
              />
              <Text style={[styles.noProducts, styles.textTypo6]}>
                No products
              </Text>
              <Text style={styles.youDontHave}>
                You don't have any products yet!
              </Text>
              <Image
                style={[styles.maskGroup26Child, styles.maskChildPosition]}
                resizeMode="cover"
                source={require("../assets/frame-302.png")}
              />
              <Image
                style={[
                  styles.illustrationIcon8,
                  styles.illustrationIconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/illustration8.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.home11, styles.emptyLayout]}>
        <View style={styles.home2}>
          <Image
            style={[styles.vectorIcon9, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector9.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.vectorIcon9, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/home-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <Image
                style={[styles.bgIcon6, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/bg6.png")}
              />
              <View style={[styles.meetup, styles.ads3Position]}>
                <Image
                  style={[styles.groupIcon5, styles.groupIconPosition1]}
                  resizeMode="cover"
                  source={require("../assets/group5.png")}
                />
                <Image
                  style={[styles.meetupChild, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-75.png")}
                />
                <Image
                  style={[styles.meetupItem, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-76.png")}
                />
                <Text style={[styles.meetup1, styles.meetup1Clr]}>Meetup</Text>
                <Text style={[styles.offLineExchangeOf, styles.meetup1Clr]}>
                  Off-line exchange of learning experiences
                </Text>
                <Image
                  style={[styles.meetupInner, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-136.png")}
                />
                <Image
                  style={[styles.avatar03Icon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/avatar-03.png")}
                />
                <Image
                  style={[styles.meetupChild1, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-137.png")}
                />
              </View>
              <View style={[styles.footer1, styles.iconPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.footercourseBackgroundIcon,
                      styles.backgroundIconLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footerhome-background.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/union2.png")}
                  />
                  <View style={styles.search}>
                    <Text style={styles.search1}>Search</Text>
                    <Image
                      style={[styles.searchChild, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-182.png")}
                    />
                    <Image
                      style={[styles.iconsearch, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconsearch3.png")}
                    />
                  </View>
                  <View style={[styles.footeron, styles.footeroffPosition]}>
                    <Image
                      style={[
                        styles.footeronBackgroundIcon1,
                        styles.footeronIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeron-background2.png")}
                    />
                    <Image
                      style={[styles.footeronChild, styles.childPosition]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-191.png")}
                    />
                    <Text style={[styles.home3, styles.homeTypo]}>Home</Text>
                    <Image
                      style={[styles.iconfooterhomeoff, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconfooterhomeon.png")}
                    />
                  </View>
                  <View style={[styles.footeroff, styles.text44Position]}>
                    <Image
                      style={[
                        styles.footeroffBackgroundIcon3,
                        styles.footeroffIconLayout2,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeroff-background6.png")}
                    />
                    <Text style={[styles.course, styles.courseTypo]}>
                      Course
                    </Text>
                    <Image
                      style={[
                        styles.iconfootercourseoff,
                        styles.iconItemLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconfootercourseoff1.png")}
                    />
                  </View>
                  <View style={[styles.footeroff1, styles.footeroffPosition]}>
                    <Image
                      style={[
                        styles.footeroffBackgroundIcon4,
                        styles.footeroffIconLayout1,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeroff-background7.png")}
                    />
                    <Text style={[styles.course, styles.courseTypo]}>
                      Message
                    </Text>
                    <Image
                      style={[
                        styles.iconfooternotificationoff,
                        styles.iconfootercourseonLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconfooternotificationoff2.png")}
                    />
                  </View>
                  <View style={[styles.footeroff2, styles.footeroffPosition]}>
                    <Image
                      style={[
                        styles.footeroffBackgroundIcon5,
                        styles.footeroffIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/footeroff-background8.png")}
                    />
                    <Text style={[styles.course, styles.courseTypo]}>
                      Account
                    </Text>
                    <Image
                      style={[
                        styles.iconfooteraccounton,
                        styles.text80Position,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/iconfooteraccountoff1.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.learningPlan, styles.iconPosition]}>
                <Image
                  style={[styles.bgIcon7, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/bg7.png")}
                />
                <View style={styles.text34}>
                  <Text style={[styles.more, styles.textTypo3]}>more</Text>
                </View>
                <View style={[styles.progress, styles.progressPosition]}>
                  <Image
                    style={[styles.progressIcon, styles.progressIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/progress.png")}
                  />
                  <Text style={[styles.packagingDesign, styles.textTypo3]}>
                    Packaging Design
                  </Text>
                  <Text style={[styles.text35, styles.textTypo2]}>
                    <Text style={styles.text36}>40</Text>
                    <Text style={styles.text37}>/48</Text>
                  </Text>
                </View>
                <View style={[styles.progress1, styles.progressPosition]}>
                  <Image
                    style={[styles.progressIcon1, styles.progressIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/progress1.png")}
                  />
                  <Text style={[styles.productDesign, styles.textTypo3]}>
                    Product Design
                  </Text>
                  <Text style={[styles.text38, styles.textTypo2]}>
                    <Text style={styles.text36}>6</Text>
                    <Text style={styles.text37}>/24</Text>
                  </Text>
                </View>
                <View style={styles.title6}>
                  <Image
                    style={[styles.titleBackgroundIcon1, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/title-background1.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-261.png")}
                  />
                  <Text style={[styles.choiceYourCourse, styles.text57Typo]}>
                    Learning Plan
                  </Text>
                </View>
              </View>
              <View style={[styles.learnedToday2, styles.ads3Position]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition1]}
                  resizeMode="cover"
                  source={require("../assets/group6.png")}
                />
                <Text style={[styles.learnedToday3, styles.myCoursesTypo]}>
                  Learned today
                </Text>
                <Text style={[styles.myCourses, styles.myCoursesTypo]}>
                  My courses
                </Text>
                <View style={[styles.minParent, styles.minParentLayout]}>
                  <Text style={[styles.productdesignV10, styles.textTypo4]}>
                    46min
                  </Text>
                  <Text style={[styles.min2, styles.min2Typo]}>/ 60min</Text>
                </View>
                <Image
                  style={[styles.learnedTodayChild, styles.learnedPosition]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-30.png")}
                />
                <Image
                  style={[
                    styles.learnedTodayItem,
                    styles.learnedTodayItemPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-301.png")}
                />
              </View>
              <View style={[styles.ads3, styles.ads3Position]}>
                <View style={[styles.ads4, styles.adsLayout]}>
                  <Image
                    style={[styles.bgIcon8, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg8.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/illustration9.png")}
                  />
                  <View style={styles.button5}>
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-76.png")}
                    />
                    <Text style={[styles.getStarted, styles.textTypo5]}>
                      Get Started
                    </Text>
                  </View>
                  <Text style={[styles.whatDoYouwant, styles.textTypo5]}>
                    What do youwant to learn today ?
                  </Text>
                </View>
                <Image
                  style={[styles.adsIcon, styles.adsLayout]}
                  resizeMode="cover"
                  source={require("../assets/ads.png")}
                />
              </View>
              <View style={[styles.title7, styles.ads3Position]}>
                <Text style={[styles.hiKristin, styles.textTypo5]}>
                  Hi, Kristin
                </Text>
                <Text style={[styles.letsStartLearning, styles.textTypo3]}>
                  Let’s start learning
                </Text>
              </View>
              <Image
                style={[styles.statusIcon8, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/status8.png")}
              />
              <Image
                style={[styles.avatarIcon2, styles.text45Position]}
                resizeMode="cover"
                source={require("../assets/avatar2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.filter1, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/filter-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <Image
                style={[styles.unionIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/model2.png")}
              />
              <View style={styles.filter2}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.filterBackgroundIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/filter-background.png")}
                  />
                  <Image
                    style={[styles.bgIcon9, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg9.png")}
                  />
                  <View style={[styles.button6, styles.button6Layout]}>
                    <View
                      style={[
                        styles.buttonprimary5,
                        styles.buttonprimaryPosition,
                      ]}
                    >
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/buttonprimary-background5.png")}
                      />
                      <View
                        style={[
                          styles.applyFilterWrapper,
                          styles.wrapperPosition,
                        ]}
                      >
                        <Text style={[styles.share, styles.textTypo6]}>
                          Apply Filter
                        </Text>
                      </View>
                    </View>
                    <View style={styles.buttonsecondary}>
                      <Image
                        style={[
                          styles.buttonsecondaryBackgroundIcon,
                          styles.buttonsecondaryIconPosition,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/buttonsecondary-background.png")}
                      />
                      <View
                        style={[
                          styles.clearWrapper,
                          styles.clearWrapperPosition,
                        ]}
                      >
                        <Text style={[styles.clear, styles.textTypo6]}>
                          Clear
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.duration3}>
                    <View style={styles.groupParent}>
                      <View
                        style={[styles.tagsonParent, styles.tagsonPosition]}
                      >
                        <View style={styles.tagson}>
                          <Image
                            style={[styles.unionIcon, styles.iconItemLayout]}
                            resizeMode="cover"
                            source={require("../assets/tagson-background.png")}
                          />
                          <Text style={styles.hours3}>3-8 Hours</Text>
                        </View>
                        <View style={styles.tagsoff}>
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon,
                              styles.tagsoffIconLayout3,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background1.png")}
                            />
                            <Text style={styles.hours4}>8-14 Hours</Text>
                          </View>
                        </View>
                        <View style={styles.tagsoff1}>
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon1,
                              styles.tagsoffIconLayout3,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background1.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background2.png")}
                            />
                            <Text style={styles.hours5}>14-20 Hours</Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={[styles.tagsoffParent, styles.tagsoffPosition2]}
                      >
                        <View
                          style={[styles.tagsoff2, styles.tagsoffPosition1]}
                        >
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon2,
                              styles.tagsoffIconLayout2,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background2.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background3.png")}
                            />
                            <Text style={styles.hours6}>20-24 Hours</Text>
                          </View>
                        </View>
                        <View
                          style={[styles.tagsoff3, styles.tagsoffPosition1]}
                        >
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon3,
                              styles.tagsoffIconLayout2,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background3.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background4.png")}
                            />
                            <Text style={styles.hours6}>24-30 Hours</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.title8}>
                      <Image
                        style={[
                          styles.titleBackgroundIcon2,
                          styles.iconItemLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/title-background2.png")}
                      />
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/rectangle-262.png")}
                      />
                      <Text style={styles.duration4}>Duration</Text>
                    </View>
                  </View>
                  <View style={styles.price5}>
                    <View style={[styles.price6, styles.cellsPosition]}>
                      <Image
                        style={[styles.priceChild, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/rectangle-39.png")}
                      />
                      <Image
                        style={[styles.priceItem, styles.priceLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-22.png")}
                      />
                      <Image
                        style={[styles.priceInner, styles.priceLayout]}
                        resizeMode="cover"
                        source={require("../assets/ellipse-221.png")}
                      />
                      <Image
                        style={[styles.priceChild1, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/vector-4.png")}
                      />
                      <Text style={[styles.text41, styles.textTypo3]}>$90</Text>
                      <Text style={[styles.text42, styles.textTypo3]}>
                        $200
                      </Text>
                    </View>
                    <View style={styles.title9}>
                      <Image
                        style={[
                          styles.titleBackgroundIcon3,
                          styles.iconItemLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/title-background3.png")}
                      />
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/rectangle-263.png")}
                      />
                      <Text style={styles.duration4}>Price</Text>
                    </View>
                  </View>
                  <View style={styles.categories}>
                    <View style={styles.tags}>
                      <View style={[styles.tagsonGroup, styles.tagsonPosition]}>
                        <View style={styles.tagson5}>
                          <Image
                            style={[styles.unionIcon, styles.iconItemLayout]}
                            resizeMode="cover"
                            source={require("../assets/tagson-background5.png")}
                          />
                          <Text style={styles.design}>Design</Text>
                        </View>
                        <View style={styles.tagsoff4}>
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon4,
                              styles.iconItemLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background4.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background6.png")}
                            />
                            <Text style={styles.painting1}>Painting</Text>
                          </View>
                        </View>
                        <View style={styles.tagson7}>
                          <Image
                            style={[styles.unionIcon, styles.iconItemLayout]}
                            resizeMode="cover"
                            source={require("../assets/tagson-background7.png")}
                          />
                          <Text style={[styles.coding, styles.codingPosition]}>
                            Coding
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[styles.tagsoffGroup, styles.tagsoffPosition2]}
                      >
                        <View style={styles.tagsoff5}>
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon5,
                              styles.tagsoffIconLayout1,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background5.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background8.png")}
                            />
                            <Text style={styles.music}>Music</Text>
                          </View>
                        </View>
                        <View style={styles.tagsoff6}>
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon6,
                              styles.tagsoffIconLayout1,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background6.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background9.png")}
                            />
                            <Text style={styles.visualIdentiy}>
                              Visual identiy
                            </Text>
                          </View>
                        </View>
                        <View style={styles.tagsoff7}>
                          <Image
                            style={[
                              styles.tagsoffBackgroundIcon7,
                              styles.tagsoffIconLayout1,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/tagsoff-background7.png")}
                          />
                          <View style={styles.accountBackgroundmaskParent}>
                            <Image
                              style={[styles.unionIcon, styles.iconItemLayout]}
                              resizeMode="cover"
                              source={require("../assets/tagson-background10.png")}
                            />
                            <Text style={styles.mathmatics}>Mathmatics</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.title10}>
                      <Image
                        style={[
                          styles.titleBackgroundIcon4,
                          styles.iconItemLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/title-background4.png")}
                      />
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/rectangle-264.png")}
                      />
                      <Text style={styles.duration4}>Categories</Text>
                    </View>
                  </View>
                  <View style={styles.navigation}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[
                          styles.navigationBackgroundIcon,
                          styles.iconItemLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/navigation-background.png")}
                      />
                      <Image
                        style={[styles.iconclose, styles.iconcloseLayout]}
                        resizeMode="cover"
                        source={require("../assets/iconclose.png")}
                      />
                      <Text style={[styles.searchFilter, styles.text57Typo]}>
                        Search Filter
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.logIn01, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector11.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/log-in-01-backgroundmask.png")}
            />
            <View style={styles.maskGroup47}>
              <Image
                style={[styles.bgIcon10, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/bg10.png")}
              />
              <Image
                style={[styles.logoIcon, styles.title13Layout]}
                resizeMode="cover"
                source={require("../assets/logo.png")}
              />
              <View style={[styles.text43, styles.formPosition]}>
                <Text style={styles.orLoginWith}>Or login with</Text>
                <Image
                  style={[styles.textChild, styles.textPosition]}
                  resizeMode="cover"
                  source={require("../assets/vector-1.png")}
                />
                <Image
                  style={[styles.textItem, styles.textPosition]}
                  resizeMode="cover"
                  source={require("../assets/vector-11.png")}
                />
              </View>
              <View style={[styles.text44, styles.text44Position]}>
                <Text style={styles.dontHaveAnContainer}>
                  <Text
                    style={styles.dontHaveAn}
                  >{`Don’t have an account? `}</Text>
                  <Text style={styles.signUp}>Sign up</Text>
                </Text>
              </View>
              <View style={[styles.button7, styles.buttonPosition1]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background6.png")}
                  />
                  <View style={[styles.logInWrapper, styles.wrapperPosition]}>
                    <Text style={[styles.share, styles.textTypo6]}>Log In</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.text45, styles.text45Position]}>
                <Text style={[styles.forgetPassword, styles.textTypo3]}>
                  Forget password?
                </Text>
              </View>
              <View style={[styles.password, styles.emailPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.formpasswordBackgroundIcon,
                      styles.backgroundIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/formpassword-background.png")}
                  />
                  <Image
                    style={[styles.bgIcon11, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg11.png")}
                  />
                  <View style={[styles.title11, styles.titlePosition4]}>
                    <Text style={[styles.forgetPassword, styles.textTypo3]}>
                      Password
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconpreviewCloseOne, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconpreviewcloseone.png")}
                  />
                </View>
              </View>
              <View style={[styles.email, styles.emailPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.formemailBackgroundIcon,
                      styles.backgroundIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/formemail-background.png")}
                  />
                  <Image
                    style={[styles.bgIcon11, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg12.png")}
                  />
                  <View style={[styles.email1, styles.email1Position]}>
                    <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                      Cooper_Kristin@gmail.com
                    </Text>
                  </View>
                  <View style={[styles.title12, styles.titlePosition4]}>
                    <Text style={[styles.forgetPassword, styles.textTypo3]}>
                      Your Email
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.title13, styles.title13Layout]}>
                <Text style={[styles.logIn1, styles.textTypo5]}>Log In</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.logIn02, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector12.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/log-in-02-backgroundmask.png")}
            />
            <View style={[styles.maskGroup46, styles.maskGroupPosition]}>
              <Image
                style={[styles.bgIcon13, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/bg13.png")}
              />
              <View style={[styles.keyboard, styles.keyboardPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View
                    style={[styles.groupContainer, styles.groupParentPosition]}
                  >
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background,
                          styles.frame11Layout5,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background.png")}
                      />
                      <Text style={[styles.text46, styles.textPosition1]}>
                        1
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background1,
                          styles.frame11Layout4,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background1.png")}
                      />
                      <Text style={[styles.text47, styles.textPosition1]}>
                        2
                      </Text>
                    </View>
                    <View style={styles.frameIconPosition}>
                      <Image
                        style={[
                          styles.frame11Background2,
                          styles.frame11Layout3,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background2.png")}
                      />
                      <Text style={[styles.text48, styles.textPosition1]}>
                        3
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.frameView, styles.groupParentPosition]}>
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background3,
                          styles.frame11Position2,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background3.png")}
                      />
                      <Text style={[styles.text49, styles.textPosition1]}>
                        4
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background4,
                          styles.frame11Position2,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background4.png")}
                      />
                      <Text style={[styles.text50, styles.textPosition1]}>
                        5
                      </Text>
                    </View>
                    <View style={styles.frameIconPosition}>
                      <Image
                        style={[
                          styles.frame11Background5,
                          styles.frame11Position2,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background5.png")}
                      />
                      <Text style={[styles.text51, styles.textPosition1]}>
                        6
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.groupParent1, styles.groupParentPosition]}
                  >
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background6,
                          styles.frame11Position1,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background6.png")}
                      />
                      <Text style={[styles.text52, styles.textPosition1]}>
                        7
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background7,
                          styles.frame11Position1,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background7.png")}
                      />
                      <Text style={[styles.text53, styles.textPosition1]}>
                        8
                      </Text>
                    </View>
                    <View style={styles.frameIconPosition}>
                      <Image
                        style={[
                          styles.frame11Background8,
                          styles.frame11Position1,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background8.png")}
                      />
                      <Text style={[styles.text54, styles.textPosition1]}>
                        9
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.groupParent2, styles.groupParentPosition]}
                  >
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background9,
                          styles.frame11Position,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background9.png")}
                      />
                      <Text
                        style={[styles.text55, styles.textPosition1]}
                      >{` `}</Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background10,
                          styles.frame11Position,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background10.png")}
                      />
                      <Text style={[styles.text56, styles.textPosition1]}>
                        0
                      </Text>
                    </View>
                    <Image
                      style={[styles.frameIcon, styles.frameIconPosition]}
                      resizeMode="cover"
                      source={require("../assets/frame-11.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.form, styles.formPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.formBackgroundIcon,
                      styles.backgroundIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/form-background.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg14.png")}
                  />
                  <View style={[styles.phoneNumber, styles.email1Position]}>
                    <Text style={[styles.text57, styles.text57Typo]}>
                      +63 283 835 2999
                    </Text>
                  </View>
                  <Image
                    style={[styles.bgIcon15, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg15.png")}
                  />
                  <Text style={[styles.continue, styles.textTypo6]}>
                    Continue
                  </Text>
                </View>
              </View>
              <View style={styles.text58}>
                <Text style={[styles.forgetPassword, styles.textTypo3]}>
                  Enter Your Phone Number
                </Text>
              </View>
              <Image
                style={[
                  styles.illustrationIcon10,
                  styles.learnedTodayItemPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/illustration10.png")}
              />
              <View style={styles.navi}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/navigationbarlight-background.png")}
                  />
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/bg16.png")}
                  />
                  <Image
                    style={[styles.iconarrowleft, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconarrowleft.png")}
                  />
                  <Text style={[styles.continueWithPhone, styles.phoneTypo]}>
                    Continue with Phone
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.logIn03, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector13.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/log-in-03-backgroundmask.png")}
            />
            <View style={[styles.maskGroup45, styles.maskGroupPosition]}>
              <View style={[styles.keyboard2, styles.keyboardPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View
                    style={[styles.groupContainer, styles.groupParentPosition]}
                  >
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background,
                          styles.frame11Layout5,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background11.png")}
                      />
                      <Text style={[styles.text46, styles.textPosition1]}>
                        1
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background1,
                          styles.frame11Layout4,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background12.png")}
                      />
                      <Text style={[styles.text47, styles.textPosition1]}>
                        2
                      </Text>
                    </View>
                    <View style={styles.frameIconPosition}>
                      <Image
                        style={[
                          styles.frame11Background2,
                          styles.frame11Layout3,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background13.png")}
                      />
                      <Text style={[styles.text48, styles.textPosition1]}>
                        3
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.frameView, styles.groupParentPosition]}>
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background3,
                          styles.frame11Position2,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background14.png")}
                      />
                      <Text style={[styles.text49, styles.textPosition1]}>
                        4
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background4,
                          styles.frame11Position2,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background15.png")}
                      />
                      <Text style={[styles.text50, styles.textPosition1]}>
                        5
                      </Text>
                    </View>
                    <View style={styles.frameIconPosition}>
                      <Image
                        style={[
                          styles.frame11Background5,
                          styles.frame11Position2,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background16.png")}
                      />
                      <Text style={[styles.text51, styles.textPosition1]}>
                        6
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.groupParent1, styles.groupParentPosition]}
                  >
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background6,
                          styles.frame11Position1,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background17.png")}
                      />
                      <Text style={[styles.text52, styles.textPosition1]}>
                        7
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background7,
                          styles.frame11Position1,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background18.png")}
                      />
                      <Text style={[styles.text53, styles.textPosition1]}>
                        8
                      </Text>
                    </View>
                    <View style={styles.frameIconPosition}>
                      <Image
                        style={[
                          styles.frame11Background8,
                          styles.frame11Position1,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background19.png")}
                      />
                      <Text style={[styles.text54, styles.textPosition1]}>
                        9
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.groupParent2, styles.groupParentPosition]}
                  >
                    <View
                      style={[
                        styles.frame11BackgroundParent,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background9,
                          styles.frame11Position,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background20.png")}
                      />
                      <Text
                        style={[styles.text55, styles.textPosition1]}
                      >{` `}</Text>
                    </View>
                    <View
                      style={[
                        styles.frame11BackgroundGroup,
                        styles.frame11Position5,
                      ]}
                    >
                      <Image
                        style={[
                          styles.frame11Background10,
                          styles.frame11Position,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/frame-11-background21.png")}
                      />
                      <Text style={[styles.text56, styles.textPosition1]}>
                        0
                      </Text>
                    </View>
                    <Image
                      style={[styles.frameIcon, styles.frameIconPosition]}
                      resizeMode="cover"
                      source={require("../assets/frame-111.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.button8, styles.tabsLayout]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background7.png")}
                  />
                  <View
                    style={[
                      styles.verifyAndCreateAccountWrapper,
                      styles.wrapperPosition,
                    ]}
                  >
                    <Text style={[styles.share, styles.textTypo6]}>
                      Verify and Create Account
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.text70}>
                <Text style={styles.dontHaveAnContainer}>
                  Didn’t recieve code? Request again
                </Text>
              </View>
              <View style={styles.code}>
                <Text
                  style={[styles.codeIsSent, styles.text57Typo]}
                >{`Code is sent to 283 835 2999 `}</Text>
                <View style={[styles.code1, styles.codePosition]}>
                  <Image
                    style={[styles.codeBackgroundIcon, styles.codeIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/code-background.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg17.png")}
                  />
                  <Text style={[styles.text71, styles.textTypo]}>3</Text>
                </View>
                <View style={[styles.code2, styles.codePosition]}>
                  <Image
                    style={[styles.codeBackgroundIcon1, styles.codeIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/code-background1.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg18.png")}
                  />
                  <Text style={[styles.text72, styles.textTypo]}>1</Text>
                </View>
                <View style={[styles.code3, styles.codePosition]}>
                  <Image
                    style={[styles.codeBackgroundIcon2, styles.codeIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/code-background2.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg19.png")}
                  />
                  <Text style={[styles.text73, styles.textTypo]}>7</Text>
                </View>
                <View style={[styles.code4, styles.codePosition]}>
                  <Image
                    style={[styles.codeBackgroundIcon3, styles.codeIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/code-background3.png")}
                  />
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg20.png")}
                  />
                  <Text style={[styles.text74, styles.textTypo]}>0</Text>
                </View>
              </View>
              <View style={styles.navi1}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/navigationbarlight-background1.png")}
                  />
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/bg21.png")}
                  />
                  <Image
                    style={[styles.iconclose1, styles.iconcloseLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconclose1.png")}
                  />
                  <Text style={[styles.verifyPhone, styles.phoneTypo]}>
                    Verify Phone
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.message01, styles.emptyLayout]}>
        <View style={styles.message011}>
          <Image
            style={styles.vectorIcon14}
            resizeMode="cover"
            source={require("../assets/vector14.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={styles.vectorIcon14}
              resizeMode="cover"
              source={require("../assets/message-01-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <View style={[styles.cells1, styles.cellsPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View style={[styles.cell5, styles.text3Position]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.groupIcon7, styles.groupIconPosition1]}
                        resizeMode="cover"
                        source={require("../assets/group7.png")}
                      />
                      <View style={[styles.sender, styles.senderPosition1]}>
                        <Image
                          style={[styles.avatarEnIcon, styles.iconItemLayout]}
                          resizeMode="cover"
                          source={require("../assets/avatar-en.png")}
                        />
                        <Text style={[styles.bertPullman1, styles.onlineTypo]}>
                          Bert Pullman
                        </Text>
                        <Text style={[styles.online, styles.onlineTypo]}>
                          Online
                        </Text>
                        <Text style={[styles.pm, styles.pmTypo]}>04:32 pm</Text>
                      </View>
                      <Text
                        style={[
                          styles.congratulationsOnCompleting,
                          styles.iconPosition3,
                        ]}
                      >{`Congratulations on completing the first lesson, 
keep up the good work!`}</Text>
                    </View>
                  </View>
                  <View style={[styles.cell6, styles.cellPosition1]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.groupIcon8, styles.groupIconPosition]}
                        resizeMode="cover"
                        source={require("../assets/group8.png")}
                      />
                      <View style={[styles.sender1, styles.senderPosition]}>
                        <Image
                          style={[styles.avatarEnIcon, styles.iconItemLayout]}
                          resizeMode="cover"
                          source={require("../assets/avatar-en1.png")}
                        />
                        <Text style={[styles.bertPullman1, styles.onlineTypo]}>
                          Daniel Lawson
                        </Text>
                        <Text style={[styles.online, styles.onlineTypo]}>
                          Online
                        </Text>
                        <Text style={[styles.pm, styles.pmTypo]}>04:32 pm</Text>
                      </View>
                      <Text
                        style={[styles.yourCourseHas, styles.iconPosition3]}
                      >{`Your course has been updated, you can check 
the new course in your study course.`}</Text>
                      <Image
                        style={[styles.picIcon, styles.iconPosition3]}
                        resizeMode="cover"
                        source={require("../assets/pic.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.cell7, styles.cellPosition1]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.groupIcon9, styles.groupIconPosition]}
                        resizeMode="cover"
                        source={require("../assets/group9.png")}
                      />
                      <View style={[styles.sender2, styles.senderPosition]}>
                        <Image
                          style={[
                            styles.avatarEnIcon2,
                            styles.doneWrapperLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/avatar-en2.png")}
                        />
                        <Text style={[styles.nguyenShane1, styles.offlineTypo]}>
                          Nguyen Shane
                        </Text>
                        <Text style={[styles.offline, styles.offlineTypo]}>
                          Offline
                        </Text>
                        <Text style={[styles.am, styles.pmTypo]}>12:00 am</Text>
                      </View>
                      <Text
                        style={[styles.yourCourseHas, styles.iconPosition3]}
                      >{`Congratulations, you have completed your 
registration! Let's start your learning journey next.`}</Text>
                      <Image
                        style={[styles.picIcon, styles.iconPosition3]}
                        resizeMode="cover"
                        source={require("../assets/pic1.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.tab, styles.tabPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View style={styles.title14}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <View style={styles.tab3}>
                          <View style={styles.accountBackgroundmaskParent}>
                            <View
                              style={[styles.title15, styles.titlePosition3]}
                            >
                              <Image
                                style={[
                                  styles.titleBackgroundIcon5,
                                  styles.titleIconPosition,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/title-background5.png")}
                              />
                              <Text
                                style={[
                                  styles.message3,
                                  styles.messagePosition,
                                ]}
                              >
                                message
                              </Text>
                            </View>
                            <Image
                              style={[
                                styles.selectiedLineIcon,
                                styles.selectiedIconLayout,
                              ]}
                              resizeMode="cover"
                              source={require("../assets/selectied-line.png")}
                            />
                          </View>
                        </View>
                        <Image
                          style={[styles.groupChild5, styles.iconItemLayout]}
                          resizeMode="cover"
                          source={require("../assets/ellipse-70.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.title16, styles.titlePosition3]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <View style={styles.tab5}>
                          <View style={styles.accountBackgroundmaskParent}>
                            <View style={styles.accountBackgroundmaskParent}>
                              <Image
                                style={[
                                  styles.titleBackgroundIcon6,
                                  styles.titleIconPosition,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/title-background6.png")}
                              />
                              <Text
                                style={[
                                  styles.notification,
                                  styles.messagePosition,
                                ]}
                              >
                                notification
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.groupChild6,
                            styles.groupChildPosition,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/ellipse-701.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.title18, styles.titlePosition1]}>
                <Text style={[styles.account2, styles.textTypo5]}>
                  Notifications
                </Text>
              </View>
              <Image
                style={[styles.statusIcon9, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/status9.png")}
              />
              <View style={styles.footermessage1}>
                <Image
                  style={[
                    styles.footercourseBackgroundIcon,
                    styles.backgroundIconLayout1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/footermessage-background1.png")}
                />
                <Image
                  style={[styles.unionIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/union3.png")}
                />
                <View style={styles.search}>
                  <Text style={styles.search1}>Search</Text>
                  <Image
                    style={[styles.searchChild, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-183.png")}
                  />
                  <Image
                    style={[styles.iconsearch, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconsearch4.png")}
                  />
                </View>
                <View style={[styles.footeron, styles.footeroffPosition]}>
                  <Image
                    style={[
                      styles.footeronBackgroundIcon1,
                      styles.footeronIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeron-background3.png")}
                  />
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                  <Image
                    style={[styles.iconfooterhomeoff, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconfooterhomeoff2.png")}
                  />
                </View>
                <View style={[styles.footeroff, styles.text44Position]}>
                  <Image
                    style={[
                      styles.footeroffBackgroundIcon3,
                      styles.footeroffIconLayout2,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeroff-background9.png")}
                  />
                  <Text style={[styles.course, styles.courseTypo]}>Course</Text>
                  <Image
                    style={[styles.iconfootercourseoff, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconfootercourseoff2.png")}
                  />
                </View>
                <View style={[styles.footeroff1, styles.footeroffPosition]}>
                  <Image
                    style={[
                      styles.footeroffBackgroundIcon4,
                      styles.footeroffIconLayout1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeroff-background10.png")}
                  />
                  <Text style={[styles.account3, styles.courseTypo]}>
                    Message
                  </Text>
                  <Image
                    style={[
                      styles.iconfooternotificationoff,
                      styles.iconfootercourseonLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/iconfooternotificationon.png")}
                  />
                </View>
                <View style={[styles.footeroff2, styles.footeroffPosition]}>
                  <Image
                    style={[
                      styles.footeroffBackgroundIcon5,
                      styles.footeroffIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/footeroff-background11.png")}
                  />
                  <Text style={[styles.course, styles.courseTypo]}>
                    Account
                  </Text>
                  <Image
                    style={[styles.iconfooteraccounton, styles.text80Position]}
                    resizeMode="cover"
                    source={require("../assets/iconfooteraccountoff2.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.message02, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/message-02-backgroundmask.png")}
            />
            <View style={styles.maskGroup30}>
              <View style={[styles.cells3, styles.cellsPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View style={[styles.cell8, styles.cellPosition]}>
                    <Image
                      style={[styles.cellBackgroundIcon, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/cell-background.png")}
                    />
                    <Image
                      style={[styles.groupIcon10, styles.groupIconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/group10.png")}
                    />
                    <Image
                      style={[styles.icon3, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/icon3.png")}
                    />
                    <Text style={styles.successfulPurchase}>
                      Successful purchase!
                    </Text>
                    <Text style={styles.justNow}>Just now</Text>
                    <Image
                      style={styles.icontime}
                      resizeMode="cover"
                      source={require("../assets/icontime.png")}
                    />
                  </View>
                  <View style={[styles.cell9, styles.cellPosition]}>
                    <Image
                      style={[styles.cellBackgroundIcon1, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/cell-background1.png")}
                    />
                    <Image
                      style={[styles.groupIcon10, styles.groupIconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/group11.png")}
                    />
                    <Image
                      style={[styles.icon3, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/icon4.png")}
                    />
                    <Text style={styles.successfulPurchase}>
                      Congratulations on completing the ...
                    </Text>
                    <Text style={styles.justNow}>Just now</Text>
                    <Image
                      style={styles.icontime}
                      resizeMode="cover"
                      source={require("../assets/icontime1.png")}
                    />
                  </View>
                  <View style={[styles.cell10, styles.cellPosition]}>
                    <Image
                      style={[styles.cellBackgroundIcon2, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/cell-background2.png")}
                    />
                    <Image
                      style={[styles.groupIcon10, styles.groupIconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/group12.png")}
                    />
                    <Image
                      style={[styles.icon3, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/icon5.png")}
                    />
                    <Text style={styles.successfulPurchase}>
                      Your course has been updated, you ...
                    </Text>
                    <Text style={styles.justNow}>Just now</Text>
                    <Image
                      style={styles.icontime}
                      resizeMode="cover"
                      source={require("../assets/icontime2.png")}
                    />
                  </View>
                  <View style={[styles.cell11, styles.cellPosition]}>
                    <Image
                      style={[styles.cellBackgroundIcon3, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/cell-background3.png")}
                    />
                    <Image
                      style={[styles.groupIcon10, styles.groupIconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/group13.png")}
                    />
                    <Image
                      style={[styles.icon3, styles.iconPosition3]}
                      resizeMode="cover"
                      source={require("../assets/icon6.png")}
                    />
                    <Text style={styles.successfulPurchase}>
                      Congratulations, you have ...
                    </Text>
                    <Text style={styles.justNow}>Just now</Text>
                    <Image
                      style={styles.icontime}
                      resizeMode="cover"
                      source={require("../assets/icontime3.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.tab6, styles.tabPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View style={[styles.tab8, styles.titlePosition3]}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <View style={styles.tab10}>
                          <View style={styles.accountBackgroundmaskParent}>
                            <View style={styles.accountBackgroundmaskParent}>
                              <Image
                                style={[
                                  styles.titleBackgroundIcon7,
                                  styles.titleIconPosition,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/title-background7.png")}
                              />
                              <Text
                                style={[
                                  styles.message5,
                                  styles.messagePosition,
                                ]}
                              >
                                message
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={[
                            styles.groupChild7,
                            styles.groupChildPosition,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/ellipse-702.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.tab11}>
                    <View style={styles.accountBackgroundmaskParent}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <View style={styles.accountBackgroundmaskParent}>
                          <View style={styles.accountBackgroundmaskParent}>
                            <View
                              style={[styles.title15, styles.titlePosition3]}
                            >
                              <Image
                                style={[
                                  styles.titleBackgroundIcon8,
                                  styles.titleIconPosition,
                                ]}
                                resizeMode="cover"
                                source={require("../assets/title-background8.png")}
                              />
                              <Text
                                style={[
                                  styles.notification1,
                                  styles.messagePosition,
                                ]}
                              >
                                notification
                              </Text>
                            </View>
                            <Image
                              style={[
                                styles.selectiedLineIcon1,
                                styles.tagsoff9Position,
                              ]}
                              resizeMode="cover"
                              source={require("../assets/selectied-line1.png")}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.title21, styles.titlePosition1]}>
                <Text style={[styles.account2, styles.textTypo5]}>
                  Notifications
                </Text>
              </View>
              <Image
                style={[styles.statusIcon10, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/status10.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.myCourse1, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector16.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/my-course-backgroundmask.png")}
            />
            <View style={styles.maskGroup33}>
              <View style={styles.learning}>
                <View style={[styles.learning1, styles.learningPosition]}>
                  <Image
                    style={[styles.groupIcon14, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group14.png")}
                  />
                  <Text
                    style={[styles.productDesignV103, styles.textTypo5]}
                  >{`Product
Design v1.0`}</Text>
                  <Image
                    style={[styles.learningChild, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-126.png")}
                  />
                  <Text style={styles.completed}>Completed</Text>
                  <Text style={[styles.text75, styles.text75Position]}>
                    14/24
                  </Text>
                  <Image
                    style={[styles.buttonplayIcon6, styles.text75Position]}
                    resizeMode="cover"
                    source={require("../assets/buttonplay6.png")}
                  />
                </View>
                <View style={[styles.learning2, styles.learningPosition1]}>
                  <Image
                    style={[styles.groupIcon14, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group15.png")}
                  />
                  <Text style={[styles.productDesignV103, styles.textTypo5]}>
                    Visual Design
                  </Text>
                  <Image
                    style={[styles.learningChild, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-1261.png")}
                  />
                  <Text style={styles.completed}>Completed</Text>
                  <Text style={[styles.text75, styles.text75Position]}>
                    10/16
                  </Text>
                  <Image
                    style={[styles.buttonplayIcon6, styles.text75Position]}
                    resizeMode="cover"
                    source={require("../assets/buttonplay7.png")}
                  />
                </View>
                <View style={[styles.learning3, styles.learningPosition]}>
                  <Image
                    style={[styles.groupIcon14, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/group16.png")}
                  />
                  <Text
                    style={[styles.productDesignV103, styles.textTypo5]}
                  >{`Java 
Development`}</Text>
                  <Image
                    style={[styles.learningChild, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/line1.png")}
                  />
                  <Text style={styles.completed}>Completed</Text>
                  <Text style={[styles.text75, styles.text75Position]}>
                    12/18
                  </Text>
                  <Image
                    style={[styles.buttonplayIcon6, styles.text75Position]}
                    resizeMode="cover"
                    source={require("../assets/buttonplay8.png")}
                  />
                </View>
              </View>
              <View style={[styles.learnedToday4, styles.cellsPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition1]}
                  resizeMode="cover"
                  source={require("../assets/group17.png")}
                />
                <Text style={[styles.learnedToday3, styles.myCoursesTypo]}>
                  Learned today
                </Text>
                <View style={[styles.minParent, styles.minParentLayout]}>
                  <Text style={[styles.productdesignV10, styles.textTypo4]}>
                    46min
                  </Text>
                  <Text style={[styles.min2, styles.min2Typo]}>/ 60min</Text>
                </View>
                <Image
                  style={[styles.learnedTodayChild, styles.learnedPosition]}
                  resizeMode="cover"
                  source={require("../assets/line2.png")}
                />
              </View>
              <Image
                style={[styles.statusIcon11, styles.navi2Position]}
                resizeMode="cover"
                source={require("../assets/status11.png")}
              />
              <View style={[styles.navi2, styles.navi2Position]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/navigationbarlight-background2.png")}
                  />
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/bg22.png")}
                  />
                  <Image
                    style={[styles.iconarrowleft, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconarrowleft1.png")}
                  />
                  <Text style={[styles.myCourses1, styles.phoneTypo]}>
                    My courses
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.onboarding01, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/onboarding-01-backgroundmask.png")}
            />
            <View style={[styles.maskGroup51, styles.avatarIcon1Position]}>
              <Image
                style={[styles.pavigationIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/pavigation.png")}
              />
              <View style={styles.text78}>
                <Text style={styles.freeCoursesFor}>{`Free courses for you to 
find your way to learning`}</Text>
              </View>
              <View style={[styles.title22, styles.titlePosition]}>
                <Text
                  style={[styles.numerousFreeTrial, styles.textTypo]}
                >{`Numerous free
trial courses`}</Text>
              </View>
              <Image
                style={[styles.illustrationIcon11, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/illustration11.png")}
              />
              <View style={styles.skip}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.skipBackgroundIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/skip-background.png")}
                  />
                  <Text style={[styles.skip2, styles.textTypo3]}>Skip</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.onboarding02, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector18.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/onboarding-02-backgroundmask.png")}
            />
            <View style={[styles.maskGroup51, styles.avatarIcon1Position]}>
              <Image
                style={[styles.pavigationIcon, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/pavigation1.png")}
              />
              <View style={styles.text79}>
                <Text style={styles.freeCoursesFor}>{`Easy and fast learning at 
any time to help you 
improve various skills`}</Text>
              </View>
              <View style={[styles.title23, styles.titlePosition]}>
                <Text
                  style={[styles.numerousFreeTrial, styles.textTypo]}
                >{`Quick and easy 
learning`}</Text>
              </View>
              <Image
                style={[styles.illustrationIcon11, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/illustration12.png")}
              />
              <View style={styles.skip}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.skipBackgroundIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/skip-background1.png")}
                  />
                  <Text style={[styles.skip2, styles.textTypo3]}>Skip</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.onboarding03, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector19.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/onboarding-03-backgroundmask.png")}
            />
            <View style={[styles.maskGroup49, styles.button6Layout]}>
              <View style={styles.button9}>
                <View style={[styles.buttonprimary8, styles.titlePosition1]}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background8.png")}
                  />
                  <View style={[styles.signUpWrapper, styles.wrapperPosition]}>
                    <Text style={[styles.share, styles.textTypo6]}>
                      Sign up
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonsecondary1}>
                  <Image
                    style={[
                      styles.buttonsecondaryBackgroundIcon1,
                      styles.buttonsecondaryIconPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/buttonsecondary-background1.png")}
                  />
                  <View
                    style={[styles.logInContainer, styles.clearWrapperPosition]}
                  >
                    <Text style={[styles.clear, styles.textTypo6]}>Log in</Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.pavigationIcon2, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/pavigation2.png")}
              />
              <View style={[styles.text80, styles.text80Position]}>
                <Text style={styles.freeCoursesFor}>{`Study according to the 
study plan, make study 
more motivated`}</Text>
              </View>
              <View style={[styles.title24, styles.text80Position]}>
                <Text
                  style={[styles.numerousFreeTrial, styles.textTypo]}
                >{`Create your own 
study plan`}</Text>
              </View>
              <Image
                style={[styles.illustrationIcon13, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/illustration13.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.payment3, styles.emptyLayout]}>
        <View style={styles.payment}>
          <Image
            style={[styles.vectorIcon20, styles.password2Position]}
            resizeMode="cover"
            source={require("../assets/vector20.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.vectorIcon20, styles.password2Position]}
              resizeMode="cover"
              source={require("../assets/payment-backgroundmask.png")}
            />
            <View style={styles.maskGroup37}>
              <View style={[styles.button10, styles.buttonPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background9.png")}
                  />
                  <View style={[styles.payNowWrapper, styles.wrapperPosition]}>
                    <Text style={[styles.share, styles.textTypo6]}>
                      Pay Now
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.price8, styles.pricePosition]}>
                <Text style={[styles.text81, styles.textTypo5]}>$74.00</Text>
              </View>
              <View style={[styles.navigationBar, styles.statusIcon12Position]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/navigationbarlight-background3.png")}
                  />
                  <Image
                    style={[
                      styles.navigationBarlightBackgrouIcon,
                      styles.iconItemLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/bg23.png")}
                  />
                  <Image
                    style={[styles.iconclose1, styles.iconcloseLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconclose2.png")}
                  />
                  <Text style={[styles.paymentMethod, styles.phoneTypo]}>
                    Payment Method
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.statusIcon12, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/status12.png")}
              />
              <View style={[styles.cards, styles.cardsPosition]}>
                <Text style={[styles.codeIsSent, styles.text57Typo]}>
                  My card
                </Text>
                <Image
                  style={[styles.paginationIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/pagination.png")}
                />
              </View>
              <Image
                style={[styles.fill1Icon, styles.fill1IconPosition]}
                resizeMode="cover"
                source={require("../assets/fill-1.png")}
              />
              <Image
                style={[styles.fill4Icon, styles.fill4IconPosition]}
                resizeMode="cover"
                source={require("../assets/fill-4.png")}
              />
              <Image
                style={[styles.fill6Icon, styles.fill6IconPosition]}
                resizeMode="cover"
                source={require("../assets/fill-6.png")}
              />
              <Image
                style={[styles.fill7Icon, styles.fill7IconPosition]}
                resizeMode="cover"
                source={require("../assets/fill-7.png")}
              />
              <View style={[styles.cardNumber, styles.cardPosition]}>
                <Text style={styles.text82}>4829</Text>
                <Image
                  style={[styles.cardNumberChild, styles.cardLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-21.png")}
                />
                <Image
                  style={[styles.cardNumberItem, styles.cardLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-22.png")}
                />
                <View style={styles.vectorParent4}>
                  <Image
                    style={[styles.groupChild8, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-44.png")}
                  />
                  <Image
                    style={[styles.groupChild9, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-45.png")}
                  />
                  <Image
                    style={[styles.groupChild10, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-46.png")}
                  />
                  <Image
                    style={[styles.groupChild11, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={require("../assets/ellipse-47.png")}
                  />
                  <Text style={[styles.balance, styles.text83Position]}>
                    Balance
                  </Text>
                  <Text style={[styles.text83, styles.text83Position]}>
                    $23,900.00
                  </Text>
                  <Image
                    style={[styles.vectorIcon21, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector21.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.paymentSuccess1, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector22.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/payment-success-backgroundmask.png")}
            />
            <View style={[styles.maskGroup35, styles.cellsPosition]}>
              <View style={styles.button11}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background10.png")}
                  />
                  <View
                    style={[
                      styles.startLearningWrapper,
                      styles.minParentLayout,
                    ]}
                  >
                    <Text style={[styles.share, styles.textTypo6]}>
                      Start learning
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.text84}>
                <Text style={[styles.successfulPurchase1, styles.textTypo6]}>
                  Successful purchase!
                </Text>
              </View>
              <Image
                style={[styles.icon7, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/icon7.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.payment2, styles.emptyLayout]}>
        <View style={styles.payment}>
          <Image
            style={[styles.vectorIcon20, styles.password2Position]}
            resizeMode="cover"
            source={require("../assets/vector23.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.vectorIcon20, styles.password2Position]}
              resizeMode="cover"
              source={require("../assets/payment-backgroundmask1.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <View style={styles.page}>
                <View style={[styles.button12, styles.buttonPosition]}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/buttonprimary-background11.png")}
                    />
                    <View
                      style={[styles.payNowWrapper, styles.wrapperPosition]}
                    >
                      <Text style={[styles.share, styles.textTypo6]}>
                        Pay Now
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.cards1, styles.cardsPosition]}>
                  <Text style={[styles.codeIsSent, styles.text57Typo]}>
                    My card
                  </Text>
                  <Image
                    style={[styles.paginationIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/pagination1.png")}
                  />
                </View>
                <Image
                  style={[styles.fill1Icon1, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/fill-11.png")}
                />
                <Image
                  style={[styles.fill4Icon1, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/fill-41.png")}
                />
                <Image
                  style={[styles.fill6Icon1, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/fill-61.png")}
                />
                <Image
                  style={[styles.fill7Icon1, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/fill-71.png")}
                />
                <View style={[styles.cardNumber1, styles.cardPosition]}>
                  <Text style={styles.text82}>4829</Text>
                  <Image
                    style={[styles.cardNumberChild, styles.cardLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-211.png")}
                  />
                  <Image
                    style={[styles.cardNumberItem, styles.cardLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-221.png")}
                  />
                  <View style={styles.vectorParent4}>
                    <Image
                      style={[styles.groupChild8, styles.groupChildLayout]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-441.png")}
                    />
                    <Image
                      style={[styles.groupChild9, styles.groupChildLayout]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-451.png")}
                    />
                    <Image
                      style={[styles.groupChild10, styles.groupChildLayout]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-461.png")}
                    />
                    <Image
                      style={[styles.groupChild11, styles.groupChildLayout]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-471.png")}
                    />
                    <Text style={[styles.balance, styles.text83Position]}>
                      Balance
                    </Text>
                    <Text style={[styles.text83, styles.text83Position]}>
                      $23,900.00
                    </Text>
                    <Image
                      style={[styles.vectorIcon21, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/vector24.png")}
                    />
                  </View>
                </View>
                <View style={[styles.price9, styles.pricePosition]}>
                  <Text style={[styles.text81, styles.textTypo5]}>$74.00</Text>
                </View>
                <View
                  style={[styles.navigationBar1, styles.statusIcon13Position]}
                >
                  <View style={styles.accountBackgroundmaskParent}>
                    <Image
                      style={[
                        styles.navigationBarlightBackgrouIcon,
                        styles.iconItemLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/navigationbarlight-background4.png")}
                    />
                    <Image
                      style={[
                        styles.navigationBarlightBackgrouIcon,
                        styles.iconItemLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/bg24.png")}
                    />
                    <Image
                      style={[styles.iconclose1, styles.iconcloseLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconclose3.png")}
                    />
                    <Text style={[styles.paymentMethod, styles.phoneTypo]}>
                      Payment Method
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.statusIcon13, styles.statusIcon13Position]}
                  resizeMode="cover"
                  source={require("../assets/status13.png")}
                />
              </View>
              <Image
                style={[styles.vectorIcon20, styles.password2Position]}
                resizeMode="cover"
                source={require("../assets/model3.png")}
              />
              <View style={[styles.password2, styles.password2Position]}>
                <Image
                  style={[styles.bgIcon25, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/bg25.png")}
                />
                <View style={styles.keyboard4}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <View
                      style={[
                        styles.groupContainer,
                        styles.groupParentPosition,
                      ]}
                    >
                      <View
                        style={[
                          styles.frame11BackgroundParent,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background22,
                            styles.frame11Layout2,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background22.png")}
                        />
                        <Text style={[styles.text46, styles.textPosition1]}>
                          1
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.frame11BackgroundGroup,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background23,
                            styles.frame11Layout1,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background23.png")}
                        />
                        <Text style={[styles.text47, styles.textPosition1]}>
                          2
                        </Text>
                      </View>
                      <View style={styles.frameIconPosition}>
                        <Image
                          style={[
                            styles.frame11Background24,
                            styles.frame11Layout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background24.png")}
                        />
                        <Text style={[styles.text48, styles.textPosition1]}>
                          3
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[styles.frameView, styles.groupParentPosition]}
                    >
                      <View
                        style={[
                          styles.frame11BackgroundParent,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background25,
                            styles.frame11Layout2,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background25.png")}
                        />
                        <Text style={[styles.text49, styles.textPosition1]}>
                          4
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.frame11BackgroundGroup,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background26,
                            styles.frame11Layout1,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background26.png")}
                        />
                        <Text style={[styles.text50, styles.textPosition1]}>
                          5
                        </Text>
                      </View>
                      <View style={styles.frameIconPosition}>
                        <Image
                          style={[
                            styles.frame11Background27,
                            styles.frame11Layout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background27.png")}
                        />
                        <Text style={[styles.text51, styles.textPosition1]}>
                          6
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[styles.groupParent1, styles.groupParentPosition]}
                    >
                      <View
                        style={[
                          styles.frame11BackgroundParent,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background28,
                            styles.frame11Layout2,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background28.png")}
                        />
                        <Text style={[styles.text52, styles.textPosition1]}>
                          7
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.frame11BackgroundGroup,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background29,
                            styles.frame11Layout1,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background29.png")}
                        />
                        <Text style={[styles.text53, styles.textPosition1]}>
                          8
                        </Text>
                      </View>
                      <View style={styles.frameIconPosition}>
                        <Image
                          style={[
                            styles.frame11Background30,
                            styles.frame11Layout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background30.png")}
                        />
                        <Text style={[styles.text54, styles.textPosition1]}>
                          9
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[styles.groupParent2, styles.groupParentPosition]}
                    >
                      <View
                        style={[
                          styles.frame11BackgroundParent,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background31,
                            styles.frame11Layout2,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background31.png")}
                        />
                        <Text
                          style={[styles.text55, styles.textPosition1]}
                        >{` `}</Text>
                      </View>
                      <View
                        style={[
                          styles.frame11BackgroundGroup,
                          styles.frame11Position5,
                        ]}
                      >
                        <Image
                          style={[
                            styles.frame11Background32,
                            styles.frame11Layout1,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/frame-11-background32.png")}
                        />
                        <Text style={[styles.text56, styles.textPosition1]}>
                          0
                        </Text>
                      </View>
                      <Image
                        style={[styles.frameIcon, styles.frameIconPosition]}
                        resizeMode="cover"
                        source={require("../assets/frame-112.png")}
                      />
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.passwordBoxIcon, styles.iconItemLayout]}
                  resizeMode="cover"
                  source={require("../assets/password-box.png")}
                />
                <View style={styles.text99}>
                  <Text style={[styles.pleaseEnterThe, styles.h14minTypo]}>
                    Please enter the payment password
                  </Text>
                  <Text style={[styles.account2, styles.textTypo5]}>
                    Payment Password
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.verifiedPage1, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector25.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/verified-page-backgroundmask.png")}
            />
            <View style={styles.accountBackgroundmaskParent}>
              <Image
                style={[styles.modelIcon4, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/model4.png")}
              />
              <View style={[styles.overlay1, styles.overlayPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-background.png")}
                  />
                  <View style={[styles.content, styles.buttonPosition2]}>
                    <Image
                      style={[styles.icon8, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/icon8.png")}
                    />
                    <View style={[styles.title25, styles.iconLayout3]}>
                      <Text
                        style={[styles.successfulPurchase1, styles.textTypo6]}
                      >
                        Success
                      </Text>
                    </View>
                    <View style={styles.text100}>
                      <Text
                        style={styles.learnedToday1}
                      >{`Congratulations, you have 
completed your registration!`}</Text>
                    </View>
                    <View style={styles.button13}>
                      <View style={styles.accountBackgroundmaskParent}>
                        <Image
                          style={[styles.unionIcon, styles.iconItemLayout]}
                          resizeMode="cover"
                          source={require("../assets/buttonprimary-background12.png")}
                        />
                        <View
                          style={[styles.doneWrapper, styles.doneWrapperLayout]}
                        >
                          <Text style={[styles.share, styles.textTypo6]}>
                            Done
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.search11, styles.emptyLayout]}>
        <View style={styles.search9}>
          <Image
            style={[styles.vectorIcon26, styles.resultsPosition]}
            resizeMode="cover"
            source={require("../assets/vector26.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.vectorIcon26, styles.resultsPosition]}
              resizeMode="cover"
              source={require("../assets/search-backgroundmask.png")}
            />
            <View style={styles.maskGroup40}>
              <View style={[styles.results, styles.resultsPosition]}>
                <View style={[styles.courseList8, styles.cellsPosition]}>
                  <View style={[styles.courseList5, styles.coursePosition]}>
                    <Image
                      style={[styles.groupIcon2, styles.groupIconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/group18.png")}
                    />
                    <Image
                      style={[styles.imageIcon, styles.textPosition1]}
                      resizeMode="cover"
                      source={require("../assets/image3.png")}
                    />
                    <Text style={styles.productDesignV102}>
                      Product Design v1.0
                    </Text>
                    <Text style={styles.robertsonConnie}>Robertson Connie</Text>
                    <Image
                      style={[styles.iconpeople, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconpeople3.png")}
                    />
                    <View style={[styles.priceParent, styles.pricePosition1]}>
                      <View style={styles.price2}>
                        <Text style={[styles.text28, styles.textTypo5]}>$</Text>
                        <Text style={[styles.text29, styles.textTypo5]}>
                          190
                        </Text>
                      </View>
                      <View style={[styles.duration, styles.durationPosition]}>
                        <Image
                          style={[
                            styles.durationBackgroundIcon,
                            styles.iconItemLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/duration-background3.png")}
                        />
                        <Text style={[styles.hours, styles.min2Typo]}>
                          16 hours
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.courseList6, styles.coursePosition]}>
                    <Image
                      style={[styles.groupIcon2, styles.groupIconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/group19.png")}
                    />
                    <Image
                      style={[styles.imageIcon, styles.textPosition1]}
                      resizeMode="cover"
                      source={require("../assets/image4.png")}
                    />
                    <Text style={styles.productDesignV102}>Product Design</Text>
                    <Text style={styles.robertsonConnie}>Webb Landon</Text>
                    <Image
                      style={[styles.iconpeople, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconpeople4.png")}
                    />
                    <View
                      style={[styles.priceContainer, styles.pricePosition1]}
                    >
                      <View style={styles.price4}>
                        <Text style={[styles.text28, styles.textTypo5]}>$</Text>
                        <Text style={[styles.text33, styles.textTypo5]}>
                          250
                        </Text>
                      </View>
                      <View style={[styles.duration2, styles.durationPosition]}>
                        <Image
                          style={[
                            styles.durationBackgroundIcon,
                            styles.iconItemLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/duration-background4.png")}
                        />
                        <Text style={[styles.hours, styles.min2Typo]}>
                          14 hours
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.courseList7, styles.coursePosition]}>
                    <Image
                      style={[styles.groupIcon2, styles.groupIconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/group20.png")}
                    />
                    <Image
                      style={[styles.imageIcon, styles.textPosition1]}
                      resizeMode="cover"
                      source={require("../assets/image5.png")}
                    />
                    <Text style={styles.productDesignV102}>Product Design</Text>
                    <Text style={styles.robertsonConnie}>Webb Kyle</Text>
                    <Image
                      style={[styles.iconpeople, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/iconpeople5.png")}
                    />
                    <View
                      style={[styles.priceContainer, styles.pricePosition1]}
                    >
                      <View style={styles.price4}>
                        <Text style={[styles.text28, styles.textTypo5]}>$</Text>
                        <Text style={[styles.text33, styles.textTypo5]}>
                          250
                        </Text>
                      </View>
                      <View style={[styles.duration2, styles.durationPosition]}>
                        <Image
                          style={[
                            styles.durationBackgroundIcon,
                            styles.iconItemLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/duration-background5.png")}
                        />
                        <Text style={[styles.hours, styles.min2Typo]}>
                          14 hours
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.tittle}>
                  <View style={styles.accountBackgroundmaskParent}>
                    <Image
                      style={[
                        styles.titleBackgroundIcon9,
                        styles.iconItemLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/title-background9.png")}
                    />
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/rectangle-265.png")}
                    />
                    <Text style={[styles.choiceYourCourse, styles.text57Typo]}>
                      Results
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.tags1, styles.tags1Position]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <View style={styles.tagsoff8}>
                    <Image
                      style={[
                        styles.tagsoffBackgroundIcon8,
                        styles.tagsoffIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/tagsoff-background8.png")}
                    />
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/tagson-background11.png")}
                      />
                      <Text style={styles.visualIdentiy}>Visual identiy</Text>
                    </View>
                  </View>
                  <View style={[styles.tagsoff9, styles.tagsoff9Position]}>
                    <Image
                      style={[
                        styles.tagsoffBackgroundIcon9,
                        styles.tagsoffIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/tagsoff-background9.png")}
                    />
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/tagson-background12.png")}
                      />
                      <Text style={styles.painting1}>Painting</Text>
                    </View>
                  </View>
                  <View style={[styles.tagsoff10, styles.tagsoffPosition]}>
                    <Image
                      style={[
                        styles.tagsoffBackgroundIcon10,
                        styles.tagsoffIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/tagsoff-background10.png")}
                    />
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/tagson-background13.png")}
                      />
                      <Text style={[styles.coding1, styles.codingPosition]}>
                        Coding
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tagsoff11}>
                    <Image
                      style={[
                        styles.tagsoffBackgroundIcon11,
                        styles.tagsoffIconLayout,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/tagsoff-background11.png")}
                    />
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/tagson-background14.png")}
                      />
                      <Text style={styles.writing}>Writing</Text>
                    </View>
                  </View>
                  <View style={[styles.tagsoff12, styles.tagsoffPosition]}>
                    <Image
                      style={[styles.unionIcon, styles.iconItemLayout]}
                      resizeMode="cover"
                      source={require("../assets/tagsoff-background12.png")}
                    />
                    <View style={styles.accountBackgroundmaskParent}>
                      <Image
                        style={[styles.unionIcon, styles.iconItemLayout]}
                        resizeMode="cover"
                        source={require("../assets/tagson-background15.png")}
                      />
                      <Text style={[styles.coding1, styles.codingPosition]}>
                        Coding
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.searchBar1, styles.tags1Position]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/search-background1.png")}
                  />
                  <Text style={styles.findCousrePosition}>
                    <Text style={styles.text36}>Product Desi</Text>
                    <Text style={styles.text37}>gn</Text>
                  </Text>
                  <Image
                    style={[styles.iconsearch2, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconsearch5.png")}
                  />
                  <Image
                    style={[styles.iconfilter, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconfilter1.png")}
                  />
                  <Image
                    style={[styles.icondeleteTwo, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/icondeletetwo.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.statusIcon14, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/status14.png")}
              />
              <Image
                style={[styles.naviIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/navi.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.signUp11, styles.emptyLayout]}>
        <View style={styles.accountBackgroundmaskParent}>
          <Image
            style={[styles.unionIcon, styles.iconItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector27.png")}
          />
          <View style={styles.accountBackgroundmaskParent}>
            <Image
              style={[styles.unionIcon, styles.iconItemLayout]}
              resizeMode="cover"
              source={require("../assets/sign-up-backgroundmask.png")}
            />
            <View style={styles.maskGroup47}>
              <Image
                style={[styles.bgIcon10, styles.iconItemLayout]}
                resizeMode="cover"
                source={require("../assets/bg26.png")}
              />
              <View style={styles.alreadyHaveAnAccountParent}>
                <Text
                  style={styles.learnedToday1}
                >{`Already have an account？ `}</Text>
                <Text style={[styles.logIn3, styles.textTypo5]}>Log in</Text>
              </View>
              <View style={styles.text107}>
                <View style={styles.text108}>
                  <Text
                    style={styles.learnedToday1}
                  >{`By creating an account you have to agree
with our them & condication.`}</Text>
                </View>
                <Image
                  style={[
                    styles.elementscheckboxoffIcon,
                    styles.iconItemLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/elementscheckboxoff.png")}
                />
              </View>
              <View style={[styles.button14, styles.buttonPosition1]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[styles.unionIcon, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/buttonprimary-background13.png")}
                  />
                  <View
                    style={[styles.creatAccountWrapper, styles.wrapperPosition]}
                  >
                    <Text style={[styles.share, styles.textTypo6]}>
                      Creat account
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.password, styles.emailPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.formpasswordBackgroundIcon,
                      styles.backgroundIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/formpassword-background1.png")}
                  />
                  <Image
                    style={[styles.bgIcon11, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg27.png")}
                  />
                  <View style={[styles.title11, styles.titlePosition4]}>
                    <Text style={[styles.forgetPassword, styles.textTypo3]}>
                      Password
                    </Text>
                  </View>
                  <Image
                    style={[styles.iconpreviewCloseOne, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/iconpreviewcloseone1.png")}
                  />
                </View>
              </View>
              <View style={[styles.email, styles.emailPosition]}>
                <View style={styles.accountBackgroundmaskParent}>
                  <Image
                    style={[
                      styles.formemailBackgroundIcon,
                      styles.backgroundIconLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/formemail-background1.png")}
                  />
                  <Image
                    style={[styles.bgIcon11, styles.iconItemLayout]}
                    resizeMode="cover"
                    source={require("../assets/bg28.png")}
                  />
                  <Image
                    style={[styles.iconcheck, styles.tagsoffPosition2]}
                    resizeMode="cover"
                    source={require("../assets/iconcheck.png")}
                  />
                  <View style={[styles.email1, styles.email1Position]}>
                    <Text style={[styles.welcomeToThe, styles.textTypo3]}>
                      Cooper_Kristin@gmail.com
                    </Text>
                  </View>
                  <View style={[styles.title12, styles.titlePosition4]}>
                    <Text style={[styles.forgetPassword, styles.textTypo3]}>
                      Your Email
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.title29}>
                <View style={[styles.text109, styles.time9Position]}>
                  <Text
                    style={styles.enterYourDetails}
                  >{`Enter your details below & free sign up`}</Text>
                </View>
                <Text style={[styles.logIn1, styles.textTypo5]}>Sign Up</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyLayout: {
    overflow: "hidden",
    width: 375,
    top: 0,
    position: "absolute",
    height: 812,
  },
  iconItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition4: {
    right: "0.13%",
    position: "absolute",
  },
  cellPosition2: {
    height: "21.05%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo6: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  titlePosition5: {
    bottom: "88.05%",
    height: "4.43%",
    top: "7.51%",
  },
  textTypo5: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  statusIconLayout: {
    bottom: "94.58%",
    height: "5.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
  },
  footerPosition: {
    top: "86.33%",
    height: "13.67%",
    bottom: "0%",
  },
  backgroundIconLayout1: {
    bottom: "-631.53%",
    top: "631.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  footeroffPosition: {
    top: "13.51%",
    height: "58.56%",
    bottom: "27.93%",
  },
  footeronIconLayout: {
    bottom: "-1092.31%",
    top: "1101.54%",
    width: "99.98%",
    height: "90.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  homeTypo: {
    left: "0.02%",
    top: "73.85%",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text44Position: {
    left: "24.59%",
    position: "absolute",
  },
  footeroffIconLayout2: {
    width: "82.5%",
    bottom: "-1092.31%",
    top: "1101.54%",
    height: "90.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  courseTypo: {
    top: "73.85%",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "0%",
    position: "absolute",
  },
  footeroffIconLayout1: {
    width: "66%",
    bottom: "-1092.31%",
    top: "1101.54%",
    height: "90.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconfootercourseonLayout: {
    bottom: "41.54%",
    top: "21.54%",
    height: "36.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  footeroffIconLayout: {
    width: "70.21%",
    bottom: "-1092.31%",
    top: "1101.54%",
    height: "90.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text80Position: {
    right: "26.32%",
    position: "absolute",
  },
  iconLayout8: {
    height: "5.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  overlayPosition: {
    left: "11.2%",
    right: "11.2%",
    width: "77.6%",
    position: "absolute",
  },
  learnedTodayPosition: {
    bottom: "61.09%",
    top: "27.15%",
    height: "11.76%",
    position: "absolute",
  },
  timePosition1: {
    top: "42.31%",
    height: "57.69%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  textTypo4: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  minPosition: {
    top: "26.67%",
    color: Color.lightslategray_200,
  },
  text3Position: {
    bottom: "81.67%",
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  buttonPosition2: {
    left: "5.5%",
    right: "5.5%",
    width: "89%",
    position: "absolute",
  },
  wrapperPosition: {
    bottom: "24%",
    height: "48%",
    top: "28%",
  },
  groupParentPosition1: {
    width: "10.81%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textPosition3: {
    top: "32.14%",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textPosition2: {
    left: "40.09%",
    textAlign: "left",
  },
  iconLayout7: {
    width: "94.94%",
    left: "5.06%",
  },
  iconLayout6: {
    bottom: "50.12%",
    height: "49.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
  },
  tagPosition: {
    left: "10.13%",
    position: "absolute",
  },
  detailsPosition: {
    top: "33.99%",
    height: "66.01%",
    bottom: "0%",
  },
  buttonIcon1Position: {
    bottom: "34.69%",
    top: "14.29%",
    height: "51.02%",
  },
  title5Position: {
    right: "70.93%",
    width: "23.73%",
    left: "5.33%",
    position: "absolute",
  },
  cellsPosition: {
    width: "89.33%",
    right: "5.33%",
    position: "absolute",
  },
  listPosition: {
    height: "27.84%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconPosition3: {
    left: "5.97%",
    position: "absolute",
  },
  courseContentPosition: {
    left: "16.72%",
    bottom: "4.63%",
    top: "12.04%",
    height: "83.33%",
    position: "absolute",
  },
  timePosition: {
    top: "60%",
    height: "40%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  minsTypo: {
    left: "50.82%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "0%",
    position: "absolute",
  },
  listChildPosition: {
    top: "9.26%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconcloseLayout: {
    width: "3.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  pricePosition2: {
    top: "6.53%",
    position: "absolute",
  },
  h14minTypo: {
    top: "65.38%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupPosition: {
    top: "5.42%",
    right: "0%",
    position: "absolute",
  },
  iconPosition1: {
    left: "13.99%",
    position: "absolute",
  },
  time9Position: {
    top: "71.43%",
    height: "28.57%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  text57Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  tabsLayout: {
    width: "67.47%",
    position: "absolute",
  },
  taboffPosition: {
    width: "28.85%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  allTypo: {
    top: "21.43%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  taboffIconLayout: {
    bottom: "-1242.86%",
    top: "1242.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  coursePosition: {
    height: "30%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIconPosition1: {
    left: "-3.58%",
    right: "-3.58%",
    width: "107.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textPosition1: {
    top: "14.58%",
    position: "absolute",
  },
  pricePosition1: {
    bottom: "15.63%",
    height: "25%",
    top: "59.38%",
    left: "34.93%",
    position: "absolute",
  },
  durationPosition: {
    bottom: "18.75%",
    top: "14.58%",
    height: "66.67%",
    right: "0%",
    position: "absolute",
  },
  min2Typo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  childPosition: {
    bottom: "96.92%",
    height: "3.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  adsPosition: {
    width: "47.76%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  searchBarPosition: {
    top: "13.79%",
    left: "5.33%",
  },
  findCousrePosition: {
    left: "13.13%",
    top: "33.33%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  avatarIcon1Position: {
    top: "7.39%",
    position: "absolute",
  },
  maskChildPosition: {
    left: "32.51%",
    right: "32.51%",
    width: "34.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  illustrationIconPosition: {
    left: "28.67%",
    right: "28.67%",
    width: "42.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout5: {
    height: "10.58%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  noVideosTypo: {
    top: "72.6%",
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  hereIsNoTypo: {
    top: "77.71%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    color: Color.lightsteelblue,
    position: "absolute",
  },
  iconLayout4: {
    height: "9%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  iconLayout3: {
    height: "11.06%",
    position: "absolute",
  },
  iconPosition: {
    right: "29.25%",
    width: "70.75%",
    left: "0%",
    position: "absolute",
  },
  ads3Position: {
    left: "3.77%",
    position: "absolute",
  },
  meetup1Clr: {
    color: Color.indigo,
    textAlign: "left",
    position: "absolute",
  },
  progressPosition: {
    left: "9.6%",
    height: "12.15%",
    position: "absolute",
  },
  progressIconPosition: {
    left: "-0.49%",
    top: "-2.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo2: {
    top: "4.55%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  myCoursesTypo: {
    top: "20.83%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  minParentLayout: {
    width: "32.84%",
    position: "absolute",
  },
  learnedPosition: {
    bottom: "17.71%",
    top: "76.04%",
    height: "6.25%",
    left: "4.78%",
  },
  learnedTodayItemPosition: {
    right: "32.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  adsLayout: {
    height: "99.58%",
    position: "absolute",
  },
  text45Position: {
    left: "60%",
    position: "absolute",
  },
  button6Layout: {
    width: "89.4%",
    position: "absolute",
  },
  buttonprimaryPosition: {
    bottom: "0.5%",
    top: "0.5%",
    height: "99.01%",
  },
  buttonsecondaryIconPosition: {
    bottom: "-0.5%",
    top: "-0.5%",
    height: "100.99%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  clearWrapperPosition: {
    bottom: "24.26%",
    top: "28.22%",
    height: "47.52%",
    position: "absolute",
  },
  tagsonPosition: {
    bottom: "58.33%",
    height: "41.67%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  tagsoffIconLayout3: {
    bottom: "-2036.67%",
    top: "2036.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  tagsoffPosition2: {
    top: "58.33%",
    position: "absolute",
  },
  tagsoffPosition1: {
    width: "47.12%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffIconLayout2: {
    bottom: "-2176.67%",
    top: "2176.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  priceLayout: {
    bottom: "56.52%",
    width: "5.97%",
    height: "43.48%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  codingPosition: {
    left: "17.65%",
    top: "33.33%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoffIconLayout1: {
    bottom: "-1236.67%",
    top: "1236.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  title13Layout: {
    height: "6.61%",
    position: "absolute",
  },
  formPosition: {
    right: "6.4%",
    width: "87.2%",
    left: "6.4%",
    position: "absolute",
  },
  textPosition: {
    bottom: "59.72%",
    height: "2.78%",
    top: "37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  buttonPosition1: {
    height: "6.89%",
    right: "6.4%",
    width: "87.2%",
    left: "6.4%",
    position: "absolute",
  },
  emailPosition: {
    height: "9.92%",
    right: "6.4%",
    width: "87.2%",
    left: "6.4%",
    position: "absolute",
  },
  backgroundIconLayout: {
    left: "7.34%",
    right: "-7.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  titlePosition4: {
    bottom: "69.44%",
    top: "1.39%",
    height: "29.17%",
    left: "0%",
    position: "absolute",
  },
  email1Position: {
    left: "6.12%",
    position: "absolute",
  },
  keyboardPosition: {
    left: "8%",
    right: "8.8%",
    width: "83.2%",
    position: "absolute",
  },
  groupParentPosition: {
    height: "16%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  frame11Position5: {
    width: "25.64%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  frame11Layout5: {
    left: "37.5%",
    right: "-37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  frame11Layout4: {
    left: "182.5%",
    right: "-182.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  frame11Layout3: {
    left: "327.5%",
    right: "-327.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  frame11Position2: {
    bottom: "-1137.5%",
    top: "1137.5%",
  },
  frame11Position1: {
    bottom: "-1312.5%",
    top: "1312.5%",
  },
  frame11Position: {
    bottom: "-1487.5%",
    top: "1487.5%",
  },
  frameIconPosition: {
    left: "74.36%",
    width: "25.64%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  phoneTypo: {
    top: "34.09%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  codePosition: {
    top: "43.14%",
    width: "19.24%",
    height: "56.86%",
    bottom: "0%",
    position: "absolute",
  },
  codeIconLayout: {
    bottom: "-337.93%",
    top: "351.72%",
    width: "90%",
    height: "86.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xl,
    color: Color.gray_200,
    position: "absolute",
  },
  senderPosition1: {
    right: "5.76%",
    width: "88.27%",
  },
  onlineTypo: {
    left: "20.29%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  pmTypo: {
    top: "10.42%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  cellPosition1: {
    height: "39.49%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIconPosition: {
    top: "-1.37%",
    left: "-3.58%",
    right: "-3.58%",
    width: "107.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  senderPosition: {
    bottom: "76.79%",
    top: "6.83%",
    height: "16.38%",
    left: "5.97%",
    position: "absolute",
  },
  doneWrapperLayout: {
    width: "16.22%",
    position: "absolute",
  },
  offlineTypo: {
    left: "20.27%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  tabPosition: {
    left: "20%",
    position: "absolute",
  },
  titlePosition3: {
    bottom: "24.24%",
    height: "75.76%",
    top: "0%",
    position: "absolute",
  },
  titleIconPosition: {
    bottom: "-444%",
    top: "448%",
    height: "96%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  messagePosition: {
    top: "4%",
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  selectiedIconLayout: {
    top: "93.94%",
    height: "6.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildPosition: {
    bottom: "76%",
    height: "24%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  titlePosition1: {
    right: "52.27%",
    position: "absolute",
  },
  cellPosition: {
    height: "21.74%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  tagsoff9Position: {
    left: "27.1%",
    bottom: "0%",
    position: "absolute",
  },
  learningPosition: {
    bottom: "52.1%",
    width: "47.9%",
    height: "47.9%",
    top: "0%",
    position: "absolute",
  },
  text75Position: {
    top: "69.82%",
    position: "absolute",
  },
  learningPosition1: {
    right: "52.1%",
    left: "0%",
  },
  navi2Position: {
    height: "7.37%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  titlePosition: {
    bottom: "22.53%",
    top: "65.18%",
    height: "12.29%",
    position: "absolute",
  },
  password2Position: {
    left: "2.1%",
    right: "27.39%",
    width: "70.5%",
    bottom: "0%",
    position: "absolute",
  },
  buttonPosition: {
    left: "5.86%",
    right: "31.15%",
    width: "62.98%",
    bottom: "0%",
    position: "absolute",
  },
  pricePosition: {
    left: "25.8%",
    right: "50.7%",
    width: "23.5%",
    position: "absolute",
  },
  statusIcon12Position: {
    height: "4.99%",
    left: "2.1%",
    right: "27.39%",
    width: "70.5%",
    position: "absolute",
  },
  iconLayout2: {
    top: "24.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardsPosition: {
    left: "30.64%",
    right: "55.63%",
    width: "13.72%",
    position: "absolute",
  },
  fill1IconPosition: {
    right: "34.91%",
    width: "62.99%",
    left: "2.1%",
    position: "absolute",
  },
  fill4IconPosition: {
    right: "40.94%",
    width: "56.96%",
    left: "2.1%",
    position: "absolute",
  },
  fill6IconPosition: {
    left: "36.57%",
    width: "63.43%",
    right: "0%",
    position: "absolute",
  },
  fill7IconPosition: {
    right: "39.8%",
    width: "23.63%",
    left: "36.57%",
    position: "absolute",
  },
  cardPosition: {
    left: "6.5%",
    right: "17.66%",
    width: "75.84%",
    position: "absolute",
  },
  cardLayout: {
    bottom: "84.74%",
    width: "8.05%",
    height: "5.15%",
    top: "10.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChildLayout: {
    width: "1.65%",
    bottom: "94.27%",
    height: "5.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  text83Position: {
    left: "6.98%",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    top: "24.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusIcon13Position: {
    height: "4.97%",
    left: "2.1%",
    right: "27.39%",
    width: "70.5%",
    position: "absolute",
  },
  frame11Layout2: {
    left: "40%",
    right: "-40%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  frame11Layout1: {
    left: "185%",
    right: "-185%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  frame11Layout: {
    left: "330%",
    right: "-330%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  resultsPosition: {
    right: "16.29%",
    width: "83.71%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  tags1Position: {
    left: "4.46%",
    position: "absolute",
  },
  tagsoffIconLayout: {
    bottom: "-586.67%",
    top: "586.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  tagsoffPosition: {
    width: "15.89%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: "7.51%",
    right: "16.29%",
    width: "83.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon: {
    right: "0.13%",
    position: "absolute",
    width: "99.87%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  cellChild: {
    top: "433.33%",
    bottom: "-433.33%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  favourite: {
    top: "27.08%",
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    left: "5.33%",
    position: "absolute",
  },
  iconarrowright: {
    height: "27.74%",
    width: "3.91%",
    top: "36.15%",
    right: "4.44%",
    bottom: "36.11%",
    left: "91.65%",
    position: "absolute",
  },
  cell1: {
    bottom: "78.95%",
    top: "0%",
  },
  cellItem: {
    top: "558.33%",
    bottom: "-558.33%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cell2: {
    top: "26.32%",
    bottom: "52.63%",
  },
  cellInner: {
    top: "683.33%",
    bottom: "-683.33%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cell3: {
    top: "52.63%",
    bottom: "26.32%",
  },
  rectangleIcon: {
    top: "808.33%",
    bottom: "-808.33%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cell4: {
    top: "78.95%",
    bottom: "0%",
  },
  accountBackgroundmaskParent: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cell: {
    height: "28.08%",
    top: "25.62%",
    bottom: "46.31%",
    width: "99.87%",
    left: "0%",
  },
  avatarIcon: {
    height: "10.94%",
    width: "17.04%",
    top: "14.78%",
    right: "41.41%",
    bottom: "74.28%",
    left: "41.54%",
    position: "absolute",
  },
  account2: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  title: {
    width: "27.96%",
    right: "66.71%",
    left: "5.33%",
    position: "absolute",
  },
  statusIcon: {
    right: "0.13%",
    position: "absolute",
    width: "99.87%",
    left: "0%",
  },
  footermessageBackgroundIcon: {
    left: "0.13%",
    right: "-0.13%",
  },
  unionIcon: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  search1: {
    top: "77.03%",
    left: "13.6%",
    color: Color.lightsteelblue,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  searchChild: {
    height: "70.27%",
    bottom: "29.73%",
    opacity: 0.05,
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconsearch: {
    height: "23.49%",
    width: "33.42%",
    top: "22.75%",
    right: "34.21%",
    bottom: "53.77%",
    left: "32.37%",
    position: "absolute",
  },
  search: {
    width: "13.87%",
    top: "5.41%",
    right: "43.2%",
    left: "42.93%",
    bottom: "27.93%",
    height: "66.67%",
    position: "absolute",
  },
  footeronBackgroundIcon: {
    right: "-95.42%",
    left: "95.44%",
  },
  home: {
    color: Color.lightsteelblue,
  },
  iconfooterhomeoff: {
    height: "33.11%",
    width: "66.05%",
    top: "23.45%",
    right: "18.5%",
    bottom: "43.45%",
    left: "15.45%",
    position: "absolute",
  },
  footeron: {
    width: "8.8%",
    right: "82.93%",
    left: "8.27%",
    position: "absolute",
  },
  footeroffBackgroundIcon: {
    right: "-223.75%",
    left: "241.25%",
  },
  course: {
    color: Color.lightsteelblue,
  },
  iconfootercourseoff: {
    height: "30.77%",
    width: "40%",
    top: "25.34%",
    right: "30.57%",
    bottom: "43.89%",
    left: "29.43%",
    position: "absolute",
  },
  footeroff: {
    width: "10.67%",
    right: "64.74%",
    top: "13.51%",
    height: "58.56%",
    bottom: "27.93%",
  },
  footeroffBackgroundIcon1: {
    right: "-457%",
    left: "491%",
  },
  iconfooternotificationoff: {
    width: "48%",
    right: "26.06%",
    left: "25.94%",
    position: "absolute",
  },
  footeroff1: {
    width: "13.33%",
    right: "23.73%",
    left: "62.94%",
    position: "absolute",
  },
  footeroffBackgroundIcon2: {
    right: "-630.85%",
    left: "660.64%",
  },
  account3: {
    color: Color.mediumslateblue,
  },
  iconfooteraccounton: {
    width: "51.06%",
    left: "22.61%",
    bottom: "41.54%",
    top: "21.54%",
    height: "36.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  footeroff2: {
    width: "12.53%",
    right: "6.57%",
    left: "80.9%",
    position: "absolute",
  },
  footermessage: {
    left: "0.13%",
    right: "0%",
    width: "99.87%",
    position: "absolute",
  },
  account: {
    width: "100.13%",
    left: "0%",
    bottom: "0%",
    right: "-0.13%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  account1: {
    left: 9462,
  },
  buttonIcon: {
    width: "11.73%",
    top: "75.99%",
    right: "44.27%",
    bottom: "18.6%",
    left: "44%",
    position: "absolute",
  },
  learnedToday1: {
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text: {
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  min: {
    left: "54.9%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    width: "58.62%",
    right: "41.38%",
  },
  learnedToday: {
    width: "29.9%",
    right: "63.57%",
    left: "6.53%",
  },
  hrs: {
    left: "68.33%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  time1: {
    width: "80%",
    right: "20%",
  },
  totallyHours: {
    width: "25.77%",
    right: "18.9%",
    left: "55.33%",
  },
  days: {
    left: "57.75%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  time2: {
    width: "98.61%",
    right: "1.39%",
  },
  totallyDays: {
    width: "24.74%",
    top: "44.12%",
    right: "68.73%",
    bottom: "44.12%",
    left: "6.53%",
    height: "11.76%",
    position: "absolute",
  },
  goodJob: {
    top: "63.16%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    color: Color.lightslategray_200,
  },
  text3: {
    height: "12.9%",
    width: "50.86%",
    top: "5.43%",
    right: "42.61%",
    left: "6.53%",
  },
  share: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  shareWrapper: {
    width: "18.15%",
    right: "40.91%",
    left: "40.94%",
    position: "absolute",
  },
  button: {
    height: "11.31%",
    top: "85.52%",
    bottom: "3.17%",
  },
  recordOfThis: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.gray_200,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text4: {
    height: "4.07%",
    width: "39.86%",
    top: "63.35%",
    right: "30.24%",
    bottom: "32.58%",
    left: "29.9%",
    position: "absolute",
  },
  text5: {
    left: "43.14%",
    textAlign: "left",
  },
  vectorParent: {
    right: "89.19%",
    left: "0%",
  },
  text6: {
    left: "39.46%",
    textAlign: "left",
  },
  vectorGroup: {
    right: "74.32%",
    left: "14.86%",
  },
  text7: {
    left: "37.38%",
    textAlign: "left",
  },
  vectorContainer: {
    right: "59.46%",
    left: "29.73%",
  },
  text8: {
    left: "36.52%",
    textAlign: "left",
  },
  groupView: {
    right: "44.59%",
    left: "44.59%",
  },
  text9: {
    left: "36.54%",
    textAlign: "left",
  },
  vectorParent1: {
    right: "29.73%",
    left: "59.46%",
  },
  text10: {
    left: "36.39%",
    textAlign: "left",
  },
  vectorParent2: {
    right: "14.86%",
    left: "74.32%",
  },
  text11: {
    top: "32.14%",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  vectorParent3: {
    left: "89.19%",
    right: "0%",
  },
  recorder: {
    height: "6.33%",
    top: "70.59%",
    bottom: "23.08%",
  },
  overlay: {
    height: "54.43%",
    top: "18.6%",
    bottom: "26.97%",
  },
  clockIn1: {
    left: 8466,
  },
  vectorIcon2: {
    left: "5.06%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bgIcon1: {
    left: "5.06%",
    width: "94.94%",
    right: "0%",
    position: "absolute",
  },
  illustrationIcon: {
    height: "100.03%",
    width: "44.3%",
    top: "-0.03%",
    left: "55.7%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  illustrationIcon1: {
    height: "71.22%",
    width: "50.31%",
    top: "6.03%",
    right: "44.63%",
    bottom: "22.75%",
    left: "5.06%",
    position: "absolute",
  },
  productdesignV10: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.gray_200,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  name: {
    height: "13.39%",
    width: "49.37%",
    top: "33.48%",
    right: "40.51%",
    bottom: "53.13%",
  },
  bestseller: {
    top: "19.23%",
    left: "10.94%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  tag: {
    height: "11.61%",
    width: "24.22%",
    top: "16.07%",
    right: "65.66%",
    bottom: "72.32%",
  },
  ads: {
    height: "27.59%",
    top: "8.25%",
    bottom: "64.16%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIcon: {
    height: "113.27%",
    top: "-13.27%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  buyNowWrapper: {
    width: "29.24%",
    left: "35.19%",
    right: "35.57%",
    position: "absolute",
  },
  buttonprimary1: {
    width: "62.93%",
    left: "32.8%",
    right: "4.27%",
    position: "absolute",
  },
  buttonIcon1: {
    bottom: "34.69%",
    top: "14.29%",
    height: "51.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  button1: {
    height: "18.28%",
    top: "81.72%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  listBackgroundIcon: {
    top: "925.93%",
    bottom: "-925.93%",
    right: "-5.97%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  text12: {
    top: "18.52%",
    color: Color.lightsteelblue,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  welcomeToThe: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray_200,
    left: "0%",
    top: "0%",
  },
  text13: {
    fontSize: FontSize.size_xs,
    color: Color.mediumslateblue,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  mins: {
    color: Color.mediumslateblue,
  },
  time3: {
    width: "36.97%",
    right: "63.03%",
  },
  courseContent: {
    width: "49.25%",
    right: "34.03%",
  },
  buttonplayIcon: {
    height: "81.48%",
    width: "13.13%",
    bottom: "9.26%",
    left: "86.87%",
  },
  iconDone: {
    top: "62.96%",
    right: "59.1%",
    bottom: "14.81%",
    left: "37.31%",
    height: "22.22%",
  },
  list: {
    bottom: "72.16%",
    top: "0%",
  },
  listBackgroundIcon1: {
    top: "1055.56%",
    bottom: "-1055.56%",
    right: "-5.97%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  text15: {
    fontSize: FontSize.size_xs,
    color: Color.lightsteelblue,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  mins1: {
    color: Color.lightsteelblue,
  },
  time4: {
    width: "50.83%",
    right: "49.17%",
  },
  courseContent1: {
    width: "35.82%",
    right: "47.46%",
  },
  list1: {
    top: "36.08%",
    bottom: "36.08%",
  },
  component1Background: {
    top: "1185.19%",
    bottom: "-1185.19%",
    right: "-5.97%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  time5: {
    width: "89.71%",
    right: "10.29%",
  },
  courseContent2: {
    right: "62.99%",
    width: "20.3%",
  },
  lockIcon: {
    height: "37.36%",
    width: "5.22%",
    top: "29.88%",
    right: "3.96%",
    bottom: "32.76%",
    left: "90.82%",
    position: "absolute",
  },
  list2: {
    top: "72.16%",
    bottom: "0%",
  },
  courseList: {
    height: "36.19%",
    top: "41.79%",
    bottom: "22.01%",
    right: "5.33%",
    left: "5.33%",
  },
  icon: {
    height: "2.99%",
    width: "4.27%",
    top: "35.07%",
    right: "47.73%",
    bottom: "61.94%",
    left: "48%",
    position: "absolute",
  },
  aboutThisCourse: {
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sedUtPerspiciatis: {
    top: "43.75%",
    color: Color.lightslategray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  about: {
    height: "11.94%",
    width: "81.6%",
    top: "19.22%",
    right: "13.07%",
    bottom: "68.84%",
    left: "5.33%",
    position: "absolute",
  },
  h14min: {
    left: "0%",
  },
  title1: {
    height: "9.7%",
    width: "53.33%",
    right: "41.33%",
    bottom: "83.77%",
    left: "5.33%",
  },
  text18: {
    color: Color.mediumslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  price: {
    height: "5.6%",
    width: "18.67%",
    right: "4.88%",
    bottom: "87.87%",
    left: "76.45%",
  },
  details: {
    left: "5.06%",
    width: "94.94%",
    right: "0%",
    position: "absolute",
  },
  navigationBarIcon: {
    bottom: "89.16%",
    left: "5.06%",
    width: "94.94%",
    height: "5.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusIcon1: {
    left: "5.06%",
    bottom: "94.58%",
    height: "5.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    right: "0%",
    position: "absolute",
  },
  courseDetails: {
    width: "105.33%",
    left: "-5.33%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  courseDetails1: {
    left: 5976,
  },
  vectorIcon3: {
    width: "86.01%",
    left: "13.99%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  illustrationIcon2: {
    right: "-13.99%",
    bottom: "50.12%",
    height: "49.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    width: "100%",
  },
  text21: {
    color: Color.orangered,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  mins3: {
    color: Color.orangered,
  },
  listChild: {
    height: "81.51%",
    width: "11.25%",
    bottom: "9.23%",
    left: "88.74%",
  },
  iconpause: {
    height: "25.93%",
    width: "2.99%",
    top: "37.04%",
    right: "5.07%",
    bottom: "37.04%",
    left: "91.94%",
    position: "absolute",
  },
  details1: {
    width: "86.01%",
    left: "13.99%",
    right: "0%",
    top: "33.99%",
    height: "66.01%",
    bottom: "0%",
  },
  icon2: {
    height: "31.75%",
    width: "5.96%",
    right: "0.73%",
    bottom: "68.25%",
    left: "93.31%",
    top: "0%",
    position: "absolute",
  },
  lineIcon: {
    height: "3.17%",
    top: "57.14%",
    bottom: "39.68%",
    right: "0.13%",
    position: "absolute",
    width: "99.87%",
    left: "0%",
  },
  elementsChild: {
    width: "4.17%",
    top: "47.62%",
    right: "26.37%",
    bottom: "30.16%",
    left: "69.46%",
    height: "22.22%",
    position: "absolute",
  },
  text26: {
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text27: {
    left: "93.42%",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  time9: {
    width: "99.7%",
    left: "0.3%",
  },
  elements: {
    height: "7.76%",
    width: "76.94%",
    top: "25.12%",
    right: "4.48%",
    bottom: "67.12%",
    left: "18.58%",
    position: "absolute",
  },
  buttonIcon3: {
    height: "6.9%",
    width: "12.84%",
    top: "14.53%",
    right: "36.7%",
    bottom: "78.57%",
    left: "50.46%",
    position: "absolute",
  },
  navigationBarIcon1: {
    top: "4.93%",
    bottom: "89.66%",
    width: "86.01%",
    left: "13.99%",
    right: "0%",
    height: "5.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusIcon2: {
    width: "86.01%",
    left: "13.99%",
    right: "0%",
    bottom: "94.58%",
    height: "5.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
  },
  coursePlaying: {
    width: "116.27%",
    left: "-16.27%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  coursePlaying1: {
    left: 6474,
  },
  titleBackgroundIcon: {
    top: "608.33%",
    bottom: "-608.33%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  choiceYourCourse: {
    top: "33.33%",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "5.33%",
  },
  seeAll: {
    left: "82.49%",
    top: "33.33%",
    fontFamily: FontFamily.poppinsRegular,
  },
  title3: {
    height: "11.21%",
    bottom: "88.79%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  all: {
    left: "38.82%",
    color: Color.white,
  },
  tabon: {
    right: "71.15%",
    left: "0%",
  },
  taboffBackgroundIcon: {
    right: "-150.68%",
    left: "150.68%",
  },
  poular: {
    left: "19.76%",
    color: Color.lightslategray_200,
  },
  taboff: {
    left: "35.57%",
    right: "35.57%",
  },
  taboffBackgroundIcon1: {
    right: "-273.97%",
    left: "273.97%",
  },
  new: {
    left: "29.45%",
    color: Color.lightslategray_200,
  },
  taboff1: {
    left: "71.15%",
    right: "0%",
  },
  tabs: {
    height: "6.54%",
    top: "13.08%",
    right: "27.2%",
    bottom: "80.37%",
    left: "5.33%",
  },
  groupIcon2: {
    height: "125%",
    top: "-4.17%",
    bottom: "-20.83%",
  },
  imageIcon: {
    height: "70.83%",
    right: "75.52%",
    bottom: "14.58%",
    left: "4.18%",
    width: "20.3%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  productDesignV102: {
    left: "34.93%",
    top: "14.58%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  robertsonConnie: {
    top: "38.54%",
    left: "39.7%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    color: Color.lightsteelblue,
    textAlign: "left",
    position: "absolute",
  },
  iconpeople: {
    height: "10.42%",
    width: "2.54%",
    right: "62.09%",
    bottom: "47.92%",
    left: "35.37%",
    top: "41.67%",
    position: "absolute",
  },
  text28: {
    color: Color.mediumslateblue,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text29: {
    left: "28.95%",
    color: Color.mediumslateblue,
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: "0%",
    position: "absolute",
  },
  price2: {
    width: "37.62%",
    right: "62.38%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  durationBackgroundIcon: {
    height: "93.75%",
    bottom: "6.25%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  hours: {
    top: "6.25%",
    left: "14.04%",
    color: Color.orangered,
  },
  duration: {
    width: "56.44%",
    left: "43.56%",
  },
  priceParent: {
    width: "30.15%",
    right: "34.93%",
  },
  courseList5: {
    bottom: "70%",
    top: "0%",
  },
  courseList6: {
    top: "35%",
    bottom: "35%",
  },
  text33: {
    left: "26.83%",
    color: Color.mediumslateblue,
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: "0%",
    position: "absolute",
  },
  price4: {
    width: "39.42%",
    right: "60.58%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  duration2: {
    width: "54.81%",
    left: "45.19%",
  },
  priceContainer: {
    width: "31.04%",
    right: "34.03%",
  },
  courseList7: {
    top: "70%",
    bottom: "0%",
  },
  courseList4: {
    height: "74.77%",
    top: "25.23%",
    right: "5.33%",
    left: "5.33%",
    bottom: "0%",
  },
  courses2: {
    height: "52.71%",
    top: "35.96%",
    bottom: "11.33%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  footercourseBackgroundIcon: {
    right: "0%",
    left: "0%",
  },
  footeronBackgroundIcon1: {
    right: "-93.9%",
    left: "93.92%",
  },
  footeroffBackgroundIcon3: {
    right: "-222.5%",
    left: "240%",
  },
  footeroffChild: {
    width: "65%",
    right: "18.07%",
    left: "16.93%",
  },
  iconfootercourseon: {
    width: "60%",
    right: "20.57%",
    left: "19.43%",
    position: "absolute",
  },
  footeroffBackgroundIcon4: {
    right: "-456%",
    left: "490%",
  },
  footeroffBackgroundIcon5: {
    right: "-629.79%",
    left: "659.57%",
  },
  footer: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  bgIcon4: {
    height: "71.72%",
    top: "28.28%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  illustrationIcon3: {
    width: "73.74%",
    right: "26.1%",
    left: "0.16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  nameChild: {
    height: "94.44%",
    bottom: "5.56%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  painting: {
    top: "17.07%",
    left: "11.76%",
    color: "#9065be",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  name1: {
    height: "23.45%",
    width: "44.43%",
    top: "69.4%",
    bottom: "7.16%",
    left: "55.43%",
  },
  ads1: {
    left: "52.24%",
    right: "0%",
  },
  illustrationIcon4: {
    width: "68.6%",
    right: "30.77%",
    left: "0.63%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  nameItem: {
    height: "99.1%",
    bottom: "0.9%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  languege: {
    top: "12.98%",
    left: "8.91%",
    color: Color.mediumslateblue,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  name2: {
    height: "22.34%",
    width: "51.12%",
    top: "69.39%",
    bottom: "8.26%",
    left: "48.88%",
    right: "0%",
    position: "absolute",
  },
  ads2: {
    right: "52.24%",
    left: "0%",
  },
  recommendations: {
    height: "13.3%",
    top: "20.2%",
    bottom: "66.5%",
    right: "5.33%",
    left: "5.33%",
  },
  findCousre: {
    color: Color.lightsteelblue,
  },
  iconsearch2: {
    height: "28.97%",
    width: "4.15%",
    top: "34.71%",
    right: "90.87%",
    bottom: "36.32%",
    left: "4.98%",
    position: "absolute",
  },
  iconfilter: {
    width: "6.27%",
    top: "29.17%",
    right: "5.15%",
    bottom: "29.17%",
    left: "88.58%",
    height: "41.67%",
    position: "absolute",
  },
  searchBar: {
    height: "5.91%",
    bottom: "80.3%",
    right: "5.33%",
    width: "89.33%",
    position: "absolute",
  },
  title5: {
    bottom: "88.05%",
    height: "4.43%",
    top: "7.51%",
  },
  statusIcon3: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  avatarIcon1: {
    width: "9.6%",
    bottom: "86.46%",
    left: "85.07%",
    height: "6.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "5.33%",
  },
  courses1: {
    left: 4482,
  },
  noNotifictationsYet: {
    top: "85.34%",
    left: "27.67%",
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  wellNofifyYou: {
    top: "91.35%",
    left: "24.8%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    color: Color.lightsteelblue,
    position: "absolute",
  },
  maskGroup29Child: {
    height: "20.23%",
    top: "52.87%",
    bottom: "26.91%",
  },
  illustrationIcon5: {
    height: "38.46%",
    top: "46.15%",
    bottom: "15.38%",
  },
  navigationIcon: {
    top: "10.58%",
    bottom: "78.85%",
  },
  statusIcon4: {
    bottom: "89.42%",
    top: "0%",
  },
  maskGroup29: {
    height: "51.23%",
    bottom: "48.77%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  empty01: {
    left: 10956,
  },
  noNetwork: {
    left: "37.22%",
  },
  pleaseCheckYour: {
    left: "28.53%",
  },
  maskGroup28Child: {
    height: "17.21%",
    top: "44.98%",
    bottom: "37.82%",
  },
  illustrationIcon6: {
    height: "32.72%",
    top: "39.26%",
    bottom: "28.02%",
  },
  tryAgainWrapper: {
    width: "31.67%",
    right: "34.33%",
    left: "34%",
    position: "absolute",
  },
  button3: {
    height: "10.22%",
    width: "64%",
    top: "89.78%",
    right: "18.67%",
    left: "17.33%",
    bottom: "0%",
    position: "absolute",
  },
  navigationIcon1: {
    top: "9%",
    bottom: "82%",
  },
  statusIcon5: {
    bottom: "91%",
    top: "0%",
  },
  maskGroup28: {
    height: "60.22%",
    bottom: "39.78%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  empty02: {
    left: 11454,
  },
  noVideos: {
    left: "38.81%",
  },
  hereIsNo: {
    left: "24%",
  },
  searchMoreWrapper: {
    width: "43.33%",
    right: "28.44%",
    left: "28.22%",
    position: "absolute",
  },
  empty03: {
    left: 11952,
  },
  navigationIcon3: {
    top: "11.06%",
    bottom: "77.89%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    width: "100%",
  },
  statusIcon7: {
    bottom: "88.94%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  noProducts: {
    top: "89.2%",
    left: "37.01%",
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  youDontHave: {
    top: "95.48%",
    left: "23.73%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    color: Color.lightsteelblue,
    textAlign: "left",
    position: "absolute",
  },
  maskGroup26Child: {
    height: "21.14%",
    top: "55.26%",
    bottom: "23.6%",
  },
  illustrationIcon8: {
    height: "40.2%",
    top: "48.24%",
    bottom: "11.56%",
  },
  maskGroup26: {
    height: "49.01%",
    bottom: "50.99%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  empty04: {
    left: 12450,
  },
  vectorIcon9: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  bgIcon6: {
    height: "22.54%",
    bottom: "77.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
  },
  groupIcon5: {
    height: "120%",
    top: "-3.33%",
    bottom: "-16.67%",
  },
  meetupChild: {
    height: "80.43%",
    width: "28.81%",
    top: "6.88%",
    right: "4.12%",
    bottom: "12.7%",
    left: "67.07%",
    opacity: 0.56,
    position: "absolute",
  },
  meetupItem: {
    height: "59.17%",
    width: "21.19%",
    top: "17.51%",
    right: "7.93%",
    bottom: "23.33%",
    left: "70.87%",
    opacity: 0.8,
    position: "absolute",
  },
  meetup1: {
    top: "22.2%",
    fontSize: 24,
    left: "6.4%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  offLineExchangeOf: {
    top: "45.92%",
    left: "6.79%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  meetupInner: {
    height: "42.6%",
    width: "15.26%",
    top: "16.67%",
    right: "10.52%",
    bottom: "40.74%",
    left: "74.22%",
    position: "absolute",
  },
  avatar03Icon: {
    height: "35.07%",
    width: "10.54%",
    top: "39.37%",
    right: "19.47%",
    bottom: "25.56%",
    left: "69.98%",
    position: "absolute",
  },
  meetupChild1: {
    height: "36.55%",
    width: "9.95%",
    top: "37.95%",
    right: "6.87%",
    bottom: "25.49%",
    left: "83.18%",
    position: "absolute",
  },
  meetup: {
    height: "14.78%",
    top: "74.88%",
    bottom: "10.34%",
    right: "33.02%",
    width: "63.21%",
    left: "3.77%",
  },
  footeronChild: {
    width: "78.77%",
    right: "12.14%",
    left: "9.09%",
  },
  home3: {
    color: Color.mediumslateblue,
  },
  footer1: {
    top: "86.33%",
    height: "13.67%",
    bottom: "0%",
  },
  bgIcon7: {
    height: "86.74%",
    width: "95.73%",
    top: "24.31%",
    right: "2.13%",
    bottom: "-11.05%",
    left: "2.13%",
    position: "absolute",
  },
  more: {
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
  },
  text34: {
    height: "11.6%",
    width: "10.13%",
    top: "82.87%",
    right: "44.7%",
    bottom: "5.52%",
    left: "45.16%",
    position: "absolute",
  },
  progressIcon: {
    height: "95.47%",
    width: "6.93%",
    right: "93.57%",
    bottom: "6.8%",
  },
  packagingDesign: {
    left: "10.23%",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "0%",
  },
  text36: {
    color: Color.gray_200,
  },
  text37: {
    color: Color.lightsteelblue,
  },
  text35: {
    left: "86.14%",
  },
  progress: {
    width: "80.83%",
    top: "40.33%",
    right: "9.57%",
    bottom: "47.51%",
  },
  progressIcon1: {
    height: "95.45%",
    width: "6.92%",
    right: "93.58%",
    bottom: "6.82%",
  },
  productDesign: {
    left: "10.21%",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "0%",
  },
  text38: {
    left: "89.13%",
  },
  progress1: {
    width: "80.96%",
    top: "61.88%",
    right: "9.44%",
    bottom: "25.97%",
  },
  titleBackgroundIcon1: {
    top: "860.42%",
    bottom: "-860.42%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  title6: {
    height: "26.52%",
    bottom: "73.48%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  learningPlan: {
    height: "22.29%",
    top: "50.86%",
    bottom: "26.85%",
  },
  learnedToday3: {
    left: "4.78%",
    color: Color.lightslategray_200,
  },
  myCourses: {
    left: "75.41%",
    color: Color.mediumslateblue,
  },
  min2: {
    left: "63.64%",
    top: "26.67%",
    color: Color.lightslategray_200,
  },
  minParent: {
    height: "31.25%",
    right: "62.39%",
    bottom: "27.08%",
    left: "4.78%",
    top: "41.67%",
  },
  learnedTodayChild: {
    width: "90.45%",
    right: "4.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  learnedTodayItem: {
    width: "62.69%",
    bottom: "17.71%",
    top: "76.04%",
    height: "6.25%",
    left: "4.78%",
  },
  learnedToday2: {
    height: "11.82%",
    top: "16.87%",
    bottom: "71.31%",
    right: "33.02%",
    width: "63.21%",
    left: "3.77%",
  },
  bgIcon8: {
    width: "98.35%",
    right: "1.65%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  getStarted: {
    top: "25.81%",
    left: "8.82%",
    color: Color.white,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  button5: {
    height: "20.13%",
    width: "33.57%",
    top: "67.86%",
    right: "59.26%",
    bottom: "12.01%",
    left: "7.17%",
    position: "absolute",
  },
  whatDoYouwant: {
    width: "85.32%",
    top: "12.56%",
    left: "7.11%",
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ads4: {
    width: "49.64%",
    top: "0.42%",
    right: "50.36%",
    left: "0%",
    bottom: "0%",
  },
  adsIcon: {
    width: "48.82%",
    bottom: "0.42%",
    left: "51.18%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
  },
  ads3: {
    height: "19.05%",
    width: "96.23%",
    top: "30.67%",
    bottom: "50.29%",
    right: "0%",
  },
  hiKristin: {
    color: Color.white,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  letsStartLearning: {
    color: Color.white,
    top: "63.16%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
  },
  title7: {
    height: "7.02%",
    width: "24.15%",
    right: "72.08%",
    bottom: "85.47%",
    top: "7.51%",
  },
  statusIcon8: {
    bottom: "94.58%",
    height: "5.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
  },
  avatarIcon2: {
    width: "6.79%",
    top: "6.27%",
    right: "33.21%",
    bottom: "87.58%",
    height: "6.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  home2: {
    width: "141.33%",
    right: "-41.33%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  home11: {
    left: 3984,
  },
  filterBackgroundIcon: {
    top: "35.56%",
    bottom: "-35.56%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bgIcon9: {
    height: "102.17%",
    top: "-2.17%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  applyFilterWrapper: {
    width: "38.14%",
    right: "30.97%",
    left: "30.89%",
    position: "absolute",
  },
  buttonprimary5: {
    width: "70.4%",
    left: "29.6%",
    right: "0%",
    position: "absolute",
  },
  buttonsecondaryBackgroundIcon: {
    width: "100.56%",
    right: "-0.28%",
    left: "-0.28%",
  },
  clear: {
    color: Color.mediumslateblue,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  clearWrapper: {
    width: "49.16%",
    right: "25.12%",
    left: "25.72%",
  },
  buttonsecondary: {
    width: "26.7%",
    right: "73.3%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  button6: {
    height: "8.43%",
    top: "85.93%",
    bottom: "5.63%",
    left: "5.27%",
    right: "5.33%",
  },
  hours3: {
    left: "14.46%",
    top: "33.33%",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagson: {
    width: "28.62%",
    right: "71.38%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffBackgroundIcon: {
    right: "-130.68%",
    left: "130.68%",
  },
  hours4: {
    left: "13.64%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff: {
    width: "30.34%",
    right: "36.9%",
    left: "32.76%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffBackgroundIcon1: {
    right: "-226.32%",
    left: "226.32%",
  },
  hours5: {
    left: "12.63%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff1: {
    width: "32.76%",
    left: "67.24%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsonParent: {
    right: "0%",
    width: "100%",
  },
  tagsoffBackgroundIcon2: {
    right: "-20.41%",
    left: "20.41%",
  },
  hours6: {
    left: "12.24%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff2: {
    right: "52.88%",
    left: "0%",
  },
  tagsoffBackgroundIcon3: {
    right: "-132.65%",
    left: "132.65%",
  },
  tagsoff3: {
    left: "52.88%",
    right: "0%",
  },
  tagsoffParent: {
    width: "71.72%",
    right: "28.28%",
    height: "41.67%",
    left: "0%",
    bottom: "0%",
  },
  groupParent: {
    height: "55.81%",
    width: "77.33%",
    top: "44.19%",
    right: "17.33%",
    left: "5.33%",
    bottom: "0%",
    position: "absolute",
  },
  titleBackgroundIcon2: {
    top: "1154.17%",
    bottom: "-1154.17%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  duration4: {
    top: "37.5%",
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: "5.33%",
    position: "absolute",
  },
  title8: {
    height: "37.21%",
    bottom: "62.79%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  duration3: {
    height: "21.54%",
    top: "56.93%",
    bottom: "21.54%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  priceChild: {
    height: "2.17%",
    top: "19.57%",
    bottom: "78.26%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  priceItem: {
    right: "79.1%",
    left: "14.93%",
  },
  priceInner: {
    right: "42.39%",
    left: "51.64%",
  },
  priceChild1: {
    height: "4.35%",
    width: "31.34%",
    top: "18.48%",
    right: "48.06%",
    bottom: "77.17%",
    left: "20.6%",
    position: "absolute",
  },
  text41: {
    top: "52.17%",
    left: "14.04%",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text42: {
    top: "54.35%",
    left: "49.09%",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  price6: {
    height: "43.4%",
    top: "56.6%",
    right: "5.33%",
    left: "5.33%",
    bottom: "0%",
  },
  titleBackgroundIcon3: {
    top: "885.42%",
    bottom: "-885.42%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  title9: {
    height: "45.28%",
    bottom: "54.72%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  price5: {
    height: "17.7%",
    top: "35.39%",
    bottom: "46.91%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  design: {
    left: "18.46%",
    top: "33.33%",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagson5: {
    width: "28.26%",
    right: "71.74%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffBackgroundIcon4: {
    top: "1096.67%",
    right: "-132.88%",
    bottom: "-1096.67%",
    left: "132.88%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  painting1: {
    left: "16.44%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff4: {
    width: "31.74%",
    right: "34.78%",
    left: "33.48%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  coding: {
    color: Color.white,
  },
  tagson7: {
    width: "29.57%",
    left: "70.43%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsonGroup: {
    width: "81.27%",
    right: "18.73%",
  },
  tagsoffBackgroundIcon5: {
    right: "-33.9%",
    left: "33.9%",
  },
  music: {
    left: "20.34%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff5: {
    width: "20.85%",
    right: "79.15%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffBackgroundIcon6: {
    right: "-87.5%",
    left: "87.5%",
  },
  visualIdentiy: {
    left: "11.54%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff6: {
    width: "36.75%",
    right: "38.16%",
    left: "25.09%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffBackgroundIcon7: {
    right: "-215.62%",
    left: "215.63%",
  },
  mathmatics: {
    left: "12.5%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff7: {
    width: "33.92%",
    left: "66.08%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffGroup: {
    height: "41.67%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  tags: {
    width: "75.47%",
    top: "45.45%",
    right: "19.2%",
    height: "54.55%",
    left: "5.33%",
    bottom: "0%",
    position: "absolute",
  },
  titleBackgroundIcon4: {
    top: "560.42%",
    bottom: "-560.42%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  title10: {
    height: "36.36%",
    bottom: "63.64%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  categories: {
    height: "22.04%",
    top: "9.35%",
    bottom: "68.61%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  navigationBackgroundIcon: {
    top: "572.5%",
    bottom: "-572.5%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconclose: {
    height: "33.6%",
    top: "33.2%",
    right: "89.67%",
    bottom: "33.2%",
    left: "6.74%",
  },
  searchFilter: {
    top: "32.5%",
    left: "35.1%",
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  navigation: {
    height: "6.68%",
    top: "2.67%",
    bottom: "90.65%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  filter2: {
    height: "73.77%",
    top: "26.23%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  filter1: {
    left: 4980,
  },
  bgIcon10: {
    height: "89.94%",
    top: "10.06%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  logoIcon: {
    width: "32.53%",
    top: "65.56%",
    right: "34.67%",
    bottom: "27.82%",
    left: "32.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  orLoginWith: {
    left: "38.6%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  textChild: {
    width: "31.65%",
    right: "68.35%",
    left: "0%",
  },
  textItem: {
    width: "31.5%",
    left: "68.5%",
    right: "0%",
  },
  text43: {
    top: "60.19%",
    bottom: "37.33%",
    height: "2.48%",
  },
  dontHaveAn: {
    color: Color.lightslategray_200,
  },
  signUp: {
    color: Color.mediumslateblue,
  },
  dontHaveAnContainer: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text44: {
    width: "50.93%",
    top: "54.55%",
    right: "24.48%",
    bottom: "42.98%",
    height: "2.48%",
  },
  logInWrapper: {
    width: "14.37%",
    right: "42.8%",
    left: "42.82%",
    position: "absolute",
  },
  button7: {
    top: "44.08%",
    bottom: "49.04%",
  },
  forgetPassword: {
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
  },
  text45: {
    height: "2.89%",
    width: "33.33%",
    top: "39.39%",
    right: "6.67%",
    bottom: "57.71%",
  },
  formpasswordBackgroundIcon: {
    top: "398.61%",
    bottom: "-398.61%",
  },
  bgIcon11: {
    height: "69.44%",
    top: "30.56%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  title11: {
    width: "20.8%",
    right: "79.2%",
  },
  iconpreviewCloseOne: {
    height: "23.15%",
    width: "5.6%",
    top: "53.71%",
    right: "7.6%",
    bottom: "23.15%",
    left: "86.8%",
    position: "absolute",
  },
  password: {
    top: "27.69%",
    bottom: "62.4%",
  },
  formemailBackgroundIcon: {
    top: "265.28%",
    bottom: "-265.28%",
  },
  email1: {
    width: "59.33%",
    top: "54.17%",
    right: "34.56%",
    bottom: "16.67%",
    height: "29.17%",
    left: "6.12%",
  },
  title12: {
    width: "23.55%",
    right: "76.45%",
  },
  email: {
    top: "14.46%",
    bottom: "75.62%",
  },
  logIn1: {
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.gray_200,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  title13: {
    width: "25.6%",
    right: "68%",
    bottom: "93.39%",
    left: "6.4%",
    top: "0%",
  },
  maskGroup47: {
    height: "89.41%",
    top: "10.59%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  logIn01: {
    left: 1992,
  },
  bgIcon13: {
    height: "67.71%",
    top: "32.29%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  frame11Background: {
    bottom: "-962.5%",
    top: "962.5%",
  },
  text46: {
    left: "44.57%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame11BackgroundParent: {
    right: "74.36%",
    left: "0%",
  },
  frame11Background1: {
    bottom: "-962.5%",
    top: "962.5%",
  },
  text47: {
    left: "41.39%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame11BackgroundGroup: {
    right: "37.18%",
    left: "37.18%",
  },
  frame11Background2: {
    bottom: "-962.5%",
    top: "962.5%",
  },
  text48: {
    left: "41.02%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  groupContainer: {
    bottom: "84%",
    top: "0%",
  },
  frame11Background3: {
    left: "37.5%",
    right: "-37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text49: {
    left: "40.09%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.gray_200,
  },
  frame11Background4: {
    left: "182.5%",
    right: "-182.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text50: {
    left: "40.34%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame11Background5: {
    left: "327.5%",
    right: "-327.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text51: {
    left: "40.4%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frameView: {
    bottom: "56%",
    top: "28%",
  },
  frame11Background6: {
    left: "37.5%",
    right: "-37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text52: {
    left: "41.78%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame11Background7: {
    left: "182.5%",
    right: "-182.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text53: {
    left: "40.36%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame11Background8: {
    left: "327.5%",
    right: "-327.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text54: {
    left: "40.61%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  groupParent1: {
    top: "56%",
    bottom: "28%",
  },
  frame11Background9: {
    left: "37.5%",
    right: "-37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text55: {
    left: "46.43%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frame11Background10: {
    left: "182.5%",
    right: "-182.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  text56: {
    left: "40.31%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.gray_200,
  },
  frameIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupParent2: {
    top: "84%",
    bottom: "0%",
  },
  keyboard: {
    height: "39.06%",
    top: "54.43%",
    bottom: "6.51%",
  },
  formBackgroundIcon: {
    top: "722%",
    bottom: "-722%",
  },
  text57: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.gray_200,
    left: "0%",
    top: "0%",
  },
  phoneNumber: {
    height: "54%",
    width: "47.71%",
    top: "34%",
    right: "46.18%",
    bottom: "12%",
  },
  bgIcon15: {
    width: "37.92%",
    left: "62.08%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  continue: {
    left: "69.76%",
    color: Color.white,
    top: "28%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  form: {
    height: "6.51%",
    top: "41.28%",
    bottom: "52.21%",
  },
  text58: {
    height: "2.73%",
    width: "48.53%",
    top: "35.55%",
    right: "25.6%",
    bottom: "61.72%",
    left: "25.87%",
    position: "absolute",
  },
  illustrationIcon10: {
    height: "16.78%",
    width: "34.51%",
    top: "10.36%",
    bottom: "72.86%",
    left: "32.95%",
  },
  navigationBarlightBackgrouIcon: {
    top: "100%",
    bottom: "-100%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconarrowleft: {
    height: "45.46%",
    width: "5.87%",
    top: "27.27%",
    right: "89.6%",
    bottom: "27.27%",
    left: "4.53%",
    position: "absolute",
  },
  continueWithPhone: {
    left: "25.2%",
  },
  navi: {
    bottom: "94.27%",
    height: "5.73%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  maskGroup46: {
    height: "94.58%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  logIn02: {
    left: 2490,
  },
  keyboard2: {
    height: "41.78%",
    top: "58.22%",
    bottom: "0%",
  },
  verifyAndCreateAccountWrapper: {
    width: "84.19%",
    right: "7.88%",
    left: "7.93%",
    position: "absolute",
  },
  button8: {
    height: "6.96%",
    top: "41.78%",
    right: "16.27%",
    bottom: "51.25%",
    left: "16.27%",
  },
  text70: {
    height: "2.51%",
    width: "56.53%",
    top: "33.98%",
    right: "21.49%",
    bottom: "63.51%",
    left: "21.98%",
    position: "absolute",
  },
  codeIsSent: {
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
  },
  codeBackgroundIcon: {
    right: "-114%",
    left: "124%",
  },
  text71: {
    left: "36.93%",
    top: "34.48%",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  code1: {
    right: "79.64%",
    left: "1.13%",
  },
  codeBackgroundIcon1: {
    right: "-252%",
    left: "262%",
  },
  text72: {
    left: "42.3%",
    top: "34.48%",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  code2: {
    right: "53.09%",
    left: "27.67%",
  },
  codeBackgroundIcon2: {
    right: "-390%",
    left: "400%",
  },
  text73: {
    left: "38.68%",
    top: "34.48%",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  code3: {
    right: "26.55%",
    left: "54.22%",
  },
  codeBackgroundIcon3: {
    right: "-528%",
    left: "538%",
  },
  text74: {
    left: "36.9%",
    top: "34.48%",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  code4: {
    left: "80.76%",
    right: "0%",
  },
  code: {
    height: "14.21%",
    width: "69.31%",
    top: "15.6%",
    bottom: "70.19%",
    left: "14.95%",
    right: "15.73%",
    position: "absolute",
  },
  iconclose1: {
    height: "30.54%",
    top: "34.73%",
    right: "90.74%",
    bottom: "34.73%",
    left: "5.67%",
  },
  verifyPhone: {
    left: "35.06%",
  },
  navi1: {
    height: "6.13%",
    bottom: "93.87%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  maskGroup45: {
    height: "88.42%",
    bottom: "6.16%",
    left: "0%",
    width: "100%",
  },
  logIn03: {
    left: 2988,
  },
  vectorIcon14: {
    height: "89.92%",
    bottom: "10.08%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  groupIcon7: {
    height: "117.65%",
    top: "-2.94%",
    bottom: "-14.71%",
  },
  avatarEnIcon: {
    width: "16.23%",
    right: "83.77%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bertPullman1: {
    top: "12.5%",
    color: Color.gray_200,
  },
  online: {
    top: "56.25%",
    color: Color.lightslategray_200,
  },
  pm: {
    left: "81.06%",
  },
  sender: {
    height: "35.29%",
    top: "14.71%",
    bottom: "50%",
    left: "5.97%",
    position: "absolute",
  },
  congratulationsOnCompleting: {
    top: "59.56%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  cell5: {
    height: "18.33%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  groupIcon8: {
    height: "108.19%",
    bottom: "-6.83%",
  },
  sender1: {
    right: "5.76%",
    width: "88.27%",
  },
  yourCourseHas: {
    top: "27.65%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  picIcon: {
    height: "49.49%",
    width: "88.06%",
    top: "43.69%",
    right: "5.97%",
    bottom: "6.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cell6: {
    top: "19.68%",
    bottom: "40.84%",
  },
  groupIcon9: {
    bottom: "1.37%",
    height: "100%",
  },
  avatarEnIcon2: {
    right: "83.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  nguyenShane1: {
    top: "12.5%",
    color: Color.gray_200,
  },
  offline: {
    top: "56.25%",
    color: Color.lightslategray_200,
  },
  am: {
    left: "82.09%",
  },
  sender2: {
    width: "88.35%",
    right: "5.68%",
  },
  cell7: {
    top: "60.51%",
    bottom: "0%",
  },
  cells1: {
    height: "82.17%",
    top: "17.83%",
    right: "5.33%",
    left: "5.33%",
    bottom: "0%",
  },
  titleBackgroundIcon5: {
    width: "99.45%",
    right: "-97.58%",
    left: "98.14%",
  },
  message3: {
    left: "0.55%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  title15: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  selectiedLineIcon: {
    width: "54.96%",
    right: "22.8%",
    left: "22.24%",
    bottom: "0%",
    position: "absolute",
  },
  tab3: {
    width: "93.2%",
    right: "6.8%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChild5: {
    height: "18.18%",
    width: "7.32%",
    bottom: "81.82%",
    left: "92.68%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  title14: {
    width: "34.02%",
    right: "65.98%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  titleBackgroundIcon6: {
    width: "99.57%",
    right: "-239.18%",
    left: "239.62%",
  },
  notification: {
    left: "0.43%",
    fontFamily: FontFamily.poppinsRegular,
  },
  tab5: {
    width: "94.22%",
    right: "5.78%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChild6: {
    width: "6.19%",
    left: "93.81%",
  },
  title16: {
    width: "40.25%",
    left: "59.75%",
    right: "0%",
  },
  tab: {
    height: "3.65%",
    width: "64.27%",
    top: "12.4%",
    bottom: "83.94%",
    right: "15.73%",
  },
  title18: {
    height: "3.99%",
    top: "6.76%",
    bottom: "89.26%",
    width: "42.4%",
    right: "52.27%",
    left: "5.33%",
  },
  statusIcon9: {
    height: "4.87%",
    bottom: "95.13%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  footermessage1: {
    top: "77.63%",
    height: "12.29%",
    bottom: "10.08%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  message011: {
    height: "111.21%",
    bottom: "-11.21%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  message01: {
    left: 9960,
  },
  cellBackgroundIcon: {
    top: "206.25%",
    bottom: "-206.25%",
    right: "-5.97%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupIcon10: {
    height: "130%",
    top: "-5%",
    bottom: "-25%",
  },
  icon3: {
    height: "60%",
    width: "14.33%",
    top: "20%",
    right: "79.7%",
    bottom: "20%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  successfulPurchase: {
    top: "26.25%",
    left: "25.07%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  justNow: {
    left: "29.85%",
    top: "56.25%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    color: Color.lightsteelblue,
    textAlign: "left",
    position: "absolute",
  },
  icontime: {
    height: "13.75%",
    width: "3.28%",
    right: "71.49%",
    bottom: "26.87%",
    left: "25.22%",
    top: "59.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  cell8: {
    bottom: "78.26%",
    top: "0%",
  },
  cellBackgroundIcon1: {
    top: "326.25%",
    bottom: "-326.25%",
    right: "-5.97%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  cell9: {
    top: "26.09%",
    bottom: "52.17%",
  },
  cellBackgroundIcon2: {
    top: "446.25%",
    bottom: "-446.25%",
    right: "-5.97%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  cell10: {
    bottom: "26.09%",
    top: "52.17%",
  },
  cellBackgroundIcon3: {
    top: "566.25%",
    bottom: "-566.25%",
    right: "-5.97%",
    left: "5.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  cell11: {
    top: "78.26%",
    bottom: "0%",
  },
  cells3: {
    height: "69.04%",
    top: "30.96%",
    right: "5.33%",
    left: "5.33%",
    bottom: "0%",
  },
  titleBackgroundIcon7: {
    width: "99.77%",
    right: "-99.54%",
    left: "99.77%",
  },
  message5: {
    left: "0.23%",
    fontFamily: FontFamily.poppinsRegular,
  },
  tab10: {
    width: "92.8%",
    right: "7.2%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChild7: {
    width: "7.41%",
    left: "92.59%",
  },
  tab8: {
    width: "34.43%",
    right: "65.57%",
    left: "0%",
  },
  titleBackgroundIcon8: {
    width: "99.74%",
    right: "-236.08%",
    left: "236.34%",
  },
  notification1: {
    left: "0.26%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  selectiedLineIcon1: {
    width: "45.53%",
    right: "27.36%",
    top: "93.94%",
    height: "6.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tab11: {
    width: "39.21%",
    left: "60.79%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tab6: {
    height: "6.19%",
    width: "62.73%",
    top: "21.01%",
    right: "17.27%",
    bottom: "72.8%",
  },
  title21: {
    height: "6.75%",
    top: "11.44%",
    bottom: "81.8%",
    width: "42.4%",
    right: "52.27%",
    left: "5.33%",
  },
  statusIcon10: {
    height: "8.26%",
    bottom: "91.74%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  maskGroup30: {
    height: "65.64%",
    bottom: "34.36%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  message02: {
    left: 10458,
  },
  groupIcon14: {
    height: "113.14%",
    width: "115%",
    top: "-2.19%",
    right: "-7.5%",
    bottom: "-10.95%",
    left: "-7.5%",
    position: "absolute",
  },
  productDesignV103: {
    top: "13.68%",
    left: "11.88%",
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  learningChild: {
    height: "3.28%",
    width: "76.25%",
    top: "52.25%",
    right: "11.88%",
    bottom: "44.47%",
    left: "11.88%",
    position: "absolute",
  },
  completed: {
    top: "60.21%",
    left: "11.88%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  text75: {
    left: "11.88%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.gray_200,
  },
  buttonplayIcon6: {
    height: "24.08%",
    width: "27.5%",
    right: "6.88%",
    bottom: "6.1%",
    left: "65.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  learning1: {
    right: "52.1%",
    left: "0%",
  },
  learning2: {
    top: "52.1%",
    width: "47.9%",
    height: "47.9%",
    right: "52.1%",
    bottom: "0%",
    position: "absolute",
  },
  learning3: {
    left: "52.1%",
    right: "0%",
  },
  learning: {
    height: "63.84%",
    width: "89.07%",
    top: "36.16%",
    left: "5.6%",
    right: "5.33%",
    bottom: "0%",
    position: "absolute",
  },
  learnedToday4: {
    height: "16.07%",
    top: "16.74%",
    bottom: "67.19%",
    right: "5.33%",
    left: "5.33%",
  },
  statusIcon11: {
    bottom: "92.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
  },
  myCourses1: {
    left: "36.63%",
  },
  navi2: {
    top: "7.37%",
    bottom: "85.27%",
  },
  maskGroup33: {
    height: "73.57%",
    bottom: "26.43%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  myCourse1: {
    left: 8964,
  },
  pavigationIcon: {
    height: "0.93%",
    width: "21.85%",
    top: "99.07%",
    right: "45.7%",
    left: "32.45%",
    bottom: "0%",
    position: "absolute",
  },
  freeCoursesFor: {
    textAlign: "center",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text78: {
    height: "8.94%",
    width: "65.56%",
    top: "78.58%",
    right: "26.16%",
    bottom: "12.48%",
    left: "8.28%",
    position: "absolute",
  },
  numerousFreeTrial: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  title22: {
    width: "55.63%",
    right: "31.13%",
    left: "13.25%",
  },
  illustrationIcon11: {
    height: "48.42%",
    width: "86.09%",
    top: "9.68%",
    right: "13.91%",
    bottom: "41.9%",
    left: "0%",
    position: "absolute",
  },
  skipBackgroundIcon: {
    top: "150%",
    right: "-697.78%",
    bottom: "-150%",
    left: "697.78%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  skip2: {
    top: "30%",
    left: "18.52%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
  },
  skip: {
    height: "7.45%",
    width: "14.9%",
    bottom: "92.55%",
    left: "85.1%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  maskGroup51: {
    height: "66.13%",
    width: "80.53%",
    bottom: "26.48%",
    left: "15.2%",
    right: "4.27%",
  },
  onboarding01: {
    left: 0,
  },
  text79: {
    height: "13.41%",
    width: "67.22%",
    top: "80.82%",
    right: "28.81%",
    bottom: "5.77%",
    left: "3.97%",
    position: "absolute",
  },
  title23: {
    width: "59.27%",
    right: "32.78%",
    left: "7.95%",
  },
  onboarding02: {
    left: 498,
  },
  signUpWrapper: {
    width: "38.13%",
    right: "31.1%",
    left: "30.78%",
    position: "absolute",
  },
  buttonprimary8: {
    width: "47.73%",
    bottom: "0.5%",
    top: "0.5%",
    height: "99.01%",
    left: "0%",
  },
  buttonsecondaryBackgroundIcon1: {
    width: "100.31%",
    right: "-0.16%",
    left: "-0.16%",
  },
  logInContainer: {
    width: "29.28%",
    right: "35.65%",
    left: "35.07%",
  },
  buttonsecondary1: {
    width: "47.87%",
    left: "52.13%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  button9: {
    height: "8.18%",
    top: "91.82%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  pavigationIcon2: {
    height: "0.81%",
    width: "19.69%",
    top: "77.76%",
    right: "40.04%",
    bottom: "21.43%",
    left: "40.27%",
    position: "absolute",
  },
  text80: {
    height: "11.66%",
    width: "56.67%",
    top: "61.89%",
    bottom: "26.45%",
    left: "17%",
  },
  title24: {
    height: "10.69%",
    width: "57.27%",
    top: "48.28%",
    bottom: "41.03%",
    left: "16.41%",
  },
  illustrationIcon13: {
    height: "42.12%",
    width: "77.55%",
    right: "11.41%",
    bottom: "57.88%",
    left: "11.04%",
    top: "0%",
    position: "absolute",
  },
  maskGroup49: {
    height: "76.02%",
    right: "5.27%",
    bottom: "10.19%",
    top: "13.79%",
    left: "5.33%",
  },
  onboarding03: {
    left: 996,
  },
  vectorIcon20: {
    height: "78.94%",
    top: "21.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  payNowWrapper: {
    width: "20.6%",
    right: "39.67%",
    left: "39.73%",
    position: "absolute",
  },
  button10: {
    height: "5.67%",
    top: "94.33%",
  },
  text81: {
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    color: Color.gray_200,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  price8: {
    height: "6.12%",
    top: "40.68%",
    bottom: "53.19%",
  },
  paymentMethod: {
    left: "29.43%",
  },
  navigationBar: {
    top: "29.57%",
    bottom: "65.44%",
  },
  statusIcon12: {
    bottom: "70.43%",
    height: "4.99%",
    left: "2.1%",
    right: "27.39%",
    width: "70.5%",
    position: "absolute",
  },
  paginationIcon: {
    height: "2.33%",
    width: "46.58%",
    top: "97.67%",
    right: "27.11%",
    left: "26.31%",
    bottom: "0%",
    position: "absolute",
  },
  cards: {
    height: "29.15%",
    top: "52.48%",
    bottom: "18.37%",
  },
  fill1Icon: {
    height: "22.35%",
    bottom: "53.07%",
    top: "24.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fill4Icon: {
    height: "34.36%",
    bottom: "41.06%",
    top: "24.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fill6Icon: {
    height: "38.27%",
    bottom: "37.16%",
    top: "24.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fill7Icon: {
    height: "22.85%",
    bottom: "52.57%",
    top: "24.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text82: {
    left: "34.08%",
    fontSize: 18,
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  cardNumberChild: {
    right: "91.95%",
    left: "0%",
  },
  cardNumberItem: {
    right: "80.99%",
    left: "10.95%",
  },
  groupChild8: {
    right: "98.35%",
    left: "0%",
  },
  groupChild9: {
    right: "95.46%",
    left: "2.89%",
  },
  groupChild10: {
    right: "92.58%",
    left: "5.77%",
  },
  groupChild11: {
    right: "89.69%",
    left: "8.66%",
  },
  balance: {
    top: "24.26%",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  text83: {
    top: "60.3%",
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  vectorIcon21: {
    height: "31.07%",
    width: "14.51%",
    top: "199.62%",
    right: "-35.47%",
    bottom: "-130.69%",
    left: "120.96%",
    position: "absolute",
  },
  vectorParent4: {
    height: "89.9%",
    width: "78.1%",
    left: "21.9%",
    top: "10.1%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  cardNumber: {
    height: "11.44%",
    top: "41.11%",
    bottom: "47.45%",
  },
  maskGroup37: {
    height: "85.71%",
    bottom: "14.29%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  payment: {
    height: "126.69%",
    width: "141.84%",
    top: "-26.69%",
    right: "-38.85%",
    left: "-2.98%",
    bottom: "0%",
    position: "absolute",
  },
  payment3: {
    left: 6972,
  },
  startLearningWrapper: {
    right: "33.53%",
    left: "33.63%",
    bottom: "24%",
    height: "48%",
    top: "28%",
  },
  button11: {
    height: "19.46%",
    top: "80.54%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  successfulPurchase1: {
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text84: {
    height: "9.34%",
    width: "51.64%",
    top: "61.87%",
    right: "24.04%",
    bottom: "28.79%",
    left: "24.32%",
    position: "absolute",
  },
  icon7: {
    height: "54.47%",
    width: "42.09%",
    right: "29.1%",
    bottom: "45.53%",
    left: "28.81%",
    top: "0%",
    position: "absolute",
  },
  maskGroup35: {
    height: "31.65%",
    top: "24.63%",
    bottom: "43.72%",
    right: "5.33%",
    left: "5.33%",
  },
  paymentSuccess1: {
    left: 7968,
  },
  button12: {
    height: "5.65%",
    top: "94.35%",
  },
  cards1: {
    height: "29.05%",
    top: "52.64%",
    bottom: "18.31%",
  },
  fill1Icon1: {
    height: "22.28%",
    bottom: "53.23%",
    right: "34.91%",
    width: "62.99%",
    left: "2.1%",
    position: "absolute",
  },
  fill4Icon1: {
    height: "34.24%",
    bottom: "41.26%",
    right: "40.94%",
    width: "56.96%",
    left: "2.1%",
    position: "absolute",
  },
  fill6Icon1: {
    height: "38.14%",
    bottom: "37.37%",
    left: "36.57%",
    width: "63.43%",
    right: "0%",
    position: "absolute",
  },
  fill7Icon1: {
    height: "22.77%",
    bottom: "52.73%",
    right: "39.8%",
    width: "23.63%",
    left: "36.57%",
    position: "absolute",
  },
  cardNumber1: {
    height: "11.4%",
    top: "40.97%",
    bottom: "47.62%",
  },
  price9: {
    height: "6.1%",
    top: "40.54%",
    bottom: "53.35%",
  },
  navigationBar1: {
    top: "29.47%",
    bottom: "65.56%",
  },
  statusIcon13: {
    bottom: "70.53%",
    top: "24.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  page: {
    height: "86%",
    bottom: "14%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  bgIcon25: {
    height: "102.36%",
    top: "-2.36%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  frame11Background22: {
    bottom: "-962.5%",
    top: "962.5%",
  },
  frame11Background23: {
    bottom: "-962.5%",
    top: "962.5%",
  },
  frame11Background24: {
    bottom: "-962.5%",
    top: "962.5%",
  },
  frame11Background25: {
    bottom: "-1137.5%",
    top: "1137.5%",
  },
  frame11Background26: {
    bottom: "-1137.5%",
    top: "1137.5%",
  },
  frame11Background27: {
    bottom: "-1137.5%",
    top: "1137.5%",
  },
  frame11Background28: {
    bottom: "-1312.5%",
    top: "1312.5%",
  },
  frame11Background29: {
    bottom: "-1312.5%",
    top: "1312.5%",
  },
  frame11Background30: {
    bottom: "-1312.5%",
    top: "1312.5%",
  },
  frame11Background31: {
    bottom: "-1487.5%",
    top: "1487.5%",
  },
  frame11Background32: {
    bottom: "-1487.5%",
    top: "1487.5%",
  },
  keyboard4: {
    top: "36.36%",
    right: "8.27%",
    bottom: "9.09%",
    left: "8.53%",
    width: "83.2%",
    height: "54.55%",
    position: "absolute",
  },
  passwordBoxIcon: {
    height: "9.09%",
    width: "87.73%",
    top: "20.18%",
    right: "6.13%",
    bottom: "70.73%",
    left: "6.13%",
    position: "absolute",
  },
  pleaseEnterThe: {
    left: "3.72%",
  },
  text99: {
    height: "9.45%",
    width: "63.73%",
    top: "5.64%",
    right: "17.57%",
    bottom: "84.91%",
    left: "18.69%",
    position: "absolute",
  },
  password2: {
    height: "53.47%",
    top: "46.53%",
  },
  payment2: {
    left: 7470,
  },
  modelIcon4: {
    opacity: 0.6,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon8: {
    height: "29.49%",
    width: "24.71%",
    right: "37.64%",
    bottom: "70.51%",
    left: "37.64%",
    top: "0%",
    position: "absolute",
  },
  title25: {
    width: "25.87%",
    top: "38.25%",
    right: "36.91%",
    bottom: "50.69%",
    left: "37.22%",
  },
  text100: {
    height: "16.59%",
    width: "66.41%",
    top: "53.46%",
    right: "16.6%",
    bottom: "29.95%",
    left: "16.99%",
    position: "absolute",
  },
  doneWrapper: {
    right: "41.85%",
    left: "41.93%",
    bottom: "24%",
    height: "48%",
    top: "28%",
  },
  button13: {
    height: "23.04%",
    top: "76.96%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  content: {
    height: "72.09%",
    top: "15.95%",
    bottom: "11.96%",
  },
  overlay1: {
    height: "37.07%",
    top: "31.47%",
    bottom: "31.47%",
  },
  verifiedPage1: {
    left: 3486,
  },
  vectorIcon26: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    height: "100%",
  },
  courseList8: {
    height: "86.96%",
    top: "13.04%",
    right: "5.33%",
    left: "5.33%",
    bottom: "0%",
  },
  titleBackgroundIcon9: {
    top: "454.17%",
    bottom: "-454.17%",
    right: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  tittle: {
    height: "13.04%",
    bottom: "86.96%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  results: {
    height: "62.8%",
    top: "37.2%",
  },
  tagsoffBackgroundIcon8: {
    right: "-19.23%",
    left: "19.23%",
  },
  tagsoff8: {
    width: "24.3%",
    right: "75.7%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoffBackgroundIcon9: {
    right: "-186.3%",
    left: "186.3%",
  },
  tagsoff9: {
    width: "17.06%",
    right: "55.84%",
    top: "0%",
    height: "100%",
  },
  tagsoffBackgroundIcon10: {
    right: "-325%",
    left: "325%",
  },
  coding1: {
    color: Color.lightslategray_200,
  },
  tagsoff10: {
    right: "37.15%",
    left: "46.96%",
  },
  tagsoffBackgroundIcon11: {
    right: "-449.25%",
    left: "449.25%",
  },
  writing: {
    left: "17.91%",
    top: "33.33%",
    color: Color.lightslategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tagsoff11: {
    width: "15.65%",
    right: "18.69%",
    left: "65.65%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tagsoff12: {
    left: "84.11%",
    right: "0%",
  },
  tags1: {
    height: "5.12%",
    width: "95.54%",
    top: "30.03%",
    bottom: "64.85%",
    right: "0%",
  },
  icondeleteTwo: {
    height: "33.33%",
    width: "4.78%",
    right: "17.91%",
    bottom: "33.33%",
    left: "77.31%",
    top: "33.33%",
    position: "absolute",
  },
  searchBar1: {
    height: "8.19%",
    width: "74.78%",
    top: "19.11%",
    right: "20.76%",
    bottom: "72.7%",
  },
  statusIcon14: {
    bottom: "92.49%",
    top: "0%",
  },
  naviIcon: {
    bottom: "84.98%",
    top: "7.51%",
  },
  maskGroup40: {
    height: "72.17%",
    bottom: "27.83%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  search9: {
    width: "119.47%",
    right: "-19.47%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  search11: {
    left: 5478,
  },
  logIn3: {
    left: "82.18%",
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    color: Color.mediumslateblue,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  alreadyHaveAnAccountParent: {
    width: "53.87%",
    top: "58.54%",
    right: "22.93%",
    bottom: "38.98%",
    left: "23.2%",
    height: "2.48%",
    position: "absolute",
  },
  text108: {
    width: "91.67%",
    left: "8.33%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  elementscheckboxoffIcon: {
    height: "44.44%",
    width: "5.8%",
    top: "2.78%",
    right: "94.2%",
    bottom: "52.78%",
    left: "0%",
    position: "absolute",
  },
  text107: {
    height: "4.96%",
    width: "73.6%",
    top: "50.14%",
    right: "19.73%",
    bottom: "44.9%",
    left: "6.67%",
    position: "absolute",
  },
  creatAccountWrapper: {
    width: "35.78%",
    right: "32.01%",
    left: "32.21%",
    position: "absolute",
  },
  button14: {
    top: "40.91%",
    bottom: "52.2%",
  },
  iconcheck: {
    height: "13.89%",
    width: "4.33%",
    right: "8.1%",
    bottom: "27.78%",
    left: "87.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  enterYourDetails: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    color: Color.lightsteelblue,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text109: {
    left: "0%",
    width: "100%",
  },
  title29: {
    height: "8.68%",
    width: "61.07%",
    right: "32.53%",
    bottom: "91.32%",
    left: "6.4%",
    top: "0%",
    position: "absolute",
  },
  signUp11: {
    left: 1494,
  },
  lightTheme: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default LightTheme;
