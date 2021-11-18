import React, { useEffect, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import GlobalCheckBullHiccupClaimStatus from './views/Collectibles/components/GlobalCheckBullHiccupClaimStatus'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Lottery = lazy(() => import('./views/Lottery'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const [usCitizenDialogOpen, setUsCitzenDialogOpen] = React.useState(true);

  const handleClose = () => {
    setUsCitzenDialogOpen(false);
  };

  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()
  useGetDocumentTitlePrice()

  return (
    <>
      <Router history={history}>
        <ResetCSS />
        <GlobalStyle />
        <Menu>
          <SuspenseWithChunkError fallback={<> </>}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/farms">
                <Farms />
              </Route>
              <Route path="/pools">
                <Pools />
              </Route>
              <Route path="/lottery">
                <Lottery />
              </Route>
              {/* <Route path="/ifo">
                <Ifos />
              </Route>
              <Route path="/collectibles">
                <Collectibles />
              </Route>
              <Route exact path="/teams">
                <Teams />
              </Route>
              <Route path="/teams/:id">
                <Team />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route> */}
              {/* Redirect */}
              <Route path="/staking">
                <Redirect to="/pools" />
              </Route>
              <Route path="/syrup">
                <Redirect to="/pools" />
              </Route>
              {/* <Route path="/nft">
                <Redirect to="/collectibles" />
              </Route> */}
              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </SuspenseWithChunkError>
        </Menu>
        {/* <EasterEgg iterations={2} /> */}
        <ToastListener />
        <GlobalCheckBullHiccupClaimStatus />
        <Dialog
          open={usCitizenDialogOpen}
          onClose={(event, reason) => {
            if (reason !== "backdropClick") {
              handleClose();
            }
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Confirm citizenship
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By clicking continue, you confirm that you are not a U.S. citizen.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="info" onClick={handleClose}>Continue</Button>
          </DialogActions>
        </Dialog>
      </Router>
    </>
  )
}

export default React.memo(App)
