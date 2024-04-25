import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AppBar, Toolbar, Typography, Box, Divider, Grid, Container, TextField, Button, InputAdornment, Alert, Snackbar } from "@mui/material";
import Link from "next/link";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import MapHome from "../components/map";
import { useState } from "react";
import 'animate.css';


const inter = Inter({ subsets: ["latin"] });


const Slides = [
  { type: "Security Uniform", imageSrc: "/Images/security-male-female.png", imageAlt: "Security", className: styles.policeImage },
  { type: "College Uniforms", imageSrc: "/Images/nurse-bbm-student.png", imageAlt: "College Uniforms", className: styles.BBMstudent },
  { type: "School Uniforms", imageSrc: "/Images/School-children.png", imageAlt: "Security", className: styles.student },
  { type: "General Wear", imageSrc: "/Images/general.png", imageAlt: "General Wear", className: styles.general }
]




export default function Home() {

  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formNumber, setFormNumber]: any = useState()
  const [formNameError, setFormNameError] = useState(false)
  const [formEmailError, setFormEmailError] = useState(false)
  const [formNumberError, setFormNumberError] = useState(false)
  const [snackbar, setSnackbar] = useState(false)

  const sendEmail = () => {
    formName === "" ? setFormNameError(true) : setFormNameError(false)
    formEmail.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) ? setFormEmailError(false) : setFormEmailError(true)
    formNumber && formNumber.length === 10 ? setFormNumberError(false) : setFormNumberError(true)
    if (formName !== "" && formEmail.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) && formNumber.length === 10)
      fetch('/api/email', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formName, formEmail, formNumber })
      }).then((res: any) => {
        if (res.status === 200) {
          setSnackbar(true)
          setFormName("")
          setFormEmail("")
          setFormNumber()
        }
      })
  }




  return (
    <>
      <Head>
        <title>Prana</title>
        <meta name="description" content="The One Destination for all your uniforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Box>
          <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} open={snackbar} autoHideDuration={5000} onClose={() => setSnackbar(false)}>
            <Alert
              onClose={() => setSnackbar(false)}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              We&apos;ll be in touch shortly
            </Alert>
          </Snackbar>
          <AppBar className={`${styles.topbar}`} position="sticky">
            <Toolbar>
              <Image src="/Images/prannalogo.png" style={{ paddingLeft: "2rem" }} width={130}
                height={40} alt="Prana-Logo" />
              <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
              </Typography>
              <Typography className={styles.navtext} component="div">
                <Link href="#aboutUs" className={styles.linkText}> About Prana Wear</Link>
              </Typography>
              <Divider component="a" className={styles.navDivider} orientation="vertical" variant="middle" flexItem />
              <Typography className={styles.navtext} component="div">
                <Link href="#contactUs" className={styles.linkText}>  Contact Us</Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Swiper
            direction={'vertical'}
            autoplay={{
              delay: 4500,
            }}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay, Navigation]}
            className={styles.mySwiper}
          >
            {Slides.map((slide, key) => {
              return (
                <SwiperSlide key={key}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Container maxWidth="md" sx={{ ml: 10 }}>
                        <Typography className={styles.mainText + " animate__animated animate__slideInUp animate_delay-2"} variant="h3" component="div">
                          The one destination for
                        </Typography>
                        <Typography className={styles.mainsubText + " animate__animated animate__slideInUp animate_delay-2 pr-4"} variant="h3" component="div">
                          all your uniforms !
                        </Typography>
                      </Container>
                      <div className={styles.subText}>
                        <Typography variant="h6" component="div" className="animate__animated animate__slideInUp animate_delay-2" >
                          {slide.type}
                        </Typography>
                        <KeyboardDoubleArrowRightIcon style={{ fontSize: "2rem" }} className=" animate__animated animate__slideInUp animate_delay-1" />
                      </div>
                    </Grid>
                    <Grid item xs={6} className={styles.slideImage + " animate__animated animate__slideInUp"}>
                      <Image className={slide.className + " animate__animated animate__slideInUp animate_delay-2"} src={slide.imageSrc} width={500}
                        height={500} alt={slide.imageAlt} />
                    </Grid>
                  </Grid>
                </SwiperSlide>

              )
            })}

          </Swiper>
          <Grid container id="aboutUs" className={styles.aboutPrana} >
            <Grid className={styles.uniformGrid + " animate__animated  animate__slideInLeft animate_delay-2"} item xs={4}>
              <Image className={styles.uniformset} src="/Images/uniform-set.jpg" width={500}
                height={500} alt="Pitcture of prana" />
            </Grid>
            <Grid item sx={{ px: 3, py: 10 }} className="animate__animated animate__slideInUp animate_delay-2" xs={4}>
              <Typography className={styles.titleaboutText} variant="h3" component="div" sx={{ pb: 2 }}>
                About Prana Wear
              </Typography>
              <Typography className={styles.aboutText}>
                Welcome to Prana Wear, the one destination for all your uniform needs and general wear. We offer the best quality uniforms & general wear, of all sizes, at the best prices.

              </Typography>
            </Grid>
            <Divider component="a" className={styles.aboutDivider} orientation="vertical" variant="middle" flexItem />
            <Grid item className="animate__animated animate__slideInRight animate_delay-2" style={{ color: "white", margin: "5% 0", lineHeight: "3.5rem" }} xs={3}>
              <ul>
                <li><Typography className={styles.aboutText} component="div">Best quality </Typography></li>
                <li><Typography className={styles.aboutText} component="div">Friendly & Reliable Service</Typography></li>
                <li><Typography className={styles.aboutText} component="div">Pan India Delivery </Typography></li>
                <li><Typography className={styles.aboutText} component="div">Best Prices </Typography></li>
              </ul>
            </Grid>
          </Grid>
          <Grid container className={styles.contactUs} >

            <Container className=" animate__animated animate__slideInUp animate_delay-2" id="contactUs" maxWidth="md">
              <Typography className={styles.contactUsTitle} variant="h3" component="div">
                Contact Us
              </Typography>
              <Typography className={styles.contactUstextTitle} variant="h4" component="div">
                Prana wear
              </Typography>
              <Typography className={styles.contactUsaddress} variant="h6" component="div">
                2nd Floor, No 669/I, Whitestone Building, 2nd Stage, HBR Layout, Bangalore-560043
              </Typography>
              <Grid container spacing={3} className={styles.contactUsemailphone}>
                <Grid item className={styles.constactUsGrid1} xs={6}>
                  <MarkunreadTwoToneIcon />
                  <Typography component="div" style={{ paddingLeft: "0.5rem" }}>
                    info@pranasystems.in</Typography>
                </Grid>
                <Grid item className={styles.constactUsGrid2} xs={6} >
                  <LocalPhoneTwoToneIcon />
                  <Typography style={{ paddingLeft: "0.5rem" }} component="div">+91 84310 96307</Typography>
                </Grid>
              </Grid>
              <Typography className={styles.contactUsMessage} variant="h5" component="div">Kindly contact us today to avail our products and service!</Typography>
            </Container>
            <Grid container className={styles.mapForm} >

              <Grid item className={styles.mapview + " animate__animated animate__slideInLeft animate_delay-2"} xs={6}>
                <MapHome />
              </Grid>
              <Grid item xs={6}>
                <Container maxWidth="sm" className={styles.mapformcontainer + " animate__animated animate__slideInRight animate_delay-2"}>
                  <Typography className={styles.mapformTitle} variant="h4" component="div">
                    Get in touch
                  </Typography>
                  <Grid item sx={{ my: 5 }} xs={12} >
                    <TextField error={formNameError} helperText={formNameError && "Name is invalid"} type="string" required value={formName} onChange={(event) => { setFormName(event.target.value) }} InputProps={{ sx: { borderRadius: "1.2rem", backgroundColor: "#eef9fd" } }} id="Name-basic" fullWidth label="Name" variant="outlined" />
                  </Grid>
                  <Grid item sx={{ my: 5 }} xs={12} >
                    <TextField error={formEmailError} helperText={formEmailError && "Email is invalid"} type="string" required value={formEmail} onChange={(event) => { setFormEmail(event.target.value) }} InputProps={{ sx: { borderRadius: "1.2rem", backgroundColor: "#eef9fd" } }} id="Email-basic" fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid item sx={{ my: 5 }} xs={12} >
                    <TextField error={formNumberError} helperText={formNumberError && "Phone Number is invalid"} type="number" required value={formNumber} onChange={(event) => { setFormNumber(event.target.value) }} InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment>, sx: { borderRadius: "1.2rem", backgroundColor: "#eef9fd" } }} id="phoneNumber-basic" fullWidth label="Phone number" variant="outlined" />
                  </Grid>
                  <Grid item sx={{ my: 5 }} xs={12} >
                    <Button onClick={() => sendEmail()} variant="contained">Submit</Button>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 5 }} className={styles.footercontainer} >
            <Grid item sx={{ mt: 4, pl: 4 }} className={styles.footerTexttitle} xs={4} >

              <Typography variant="h6" component="div">
                Usefull Links:
              </Typography>
              <Typography component="div" style={{ lineHeight: "2.2rem", paddingLeft: "0.5rem" }} >
                <Link href="#aboutUs" className={styles.linkText}> {"  About Prana Wear"}</Link>{" >  "} <Link href="#contactUs" className={styles.linkText}>  Contact Us</Link>
              </Typography>


            </Grid>
            <Grid item sx={{ mt: 4, pl: 8 }} className={styles.footerTexttitle} xs={8} >

              <Typography variant="h6" component="div">
                About prana:
              </Typography>
              <Typography component="div" style={{ lineHeight: "2.2rem", paddingLeft: "0.5rem" }}>
                Prana Wear is the one destination for all your uniform needs and general wear.
              </Typography>

            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
}
