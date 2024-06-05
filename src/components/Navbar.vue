<template>
    <nav class="navbar navbar-expand p-4 grey mb-5 rounded-2 blurbg">
        <img src="../assets/ORIGIN.png" alt="ORIGIN Records logo" width="20%" class="d-none d-md-block" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto d-flex justify-content-around" style="width: 100%;">
                <li class="nav-item">
                    <router-link to="/songs" class="nav-link" style="font-size: 20px; color: white"
                                 >
                        <div class="vhs-table">
                            <div class="vhs-lmao" data-text="Songs">Songs</div>
                        </div>
                        
                    </router-link>

                </li>
                <li class="nav-item">
                    <router-link to="/artists" class="nav-link" style="font-size: 20px; color: white">
                    
                    <div class="vhs-table">
                        <div class="vhs-lmao" data-text="Artists">
                            Artists
                        </div>
                    </div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" style="font-size: 20px; color: white">
                    
                    <div class="vhs-table">
                        <div class="vhs-lmao" data-text="About">
                            
                            About
                        
                        </div>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    };
</script>

<style>
    .vhs-table {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial;
        text-align: center;
    }

    .vhs-lmao {
  position: relative;
  animation: glitch 0.5s infinite;
  font-size: 25px;
}

.vhs-lmao::before,
.vhs-lmao::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
}

.vhs-lmao::before {
  left: 2.5px;
  text-shadow: -2px 0 red;
  animation: glitch 1.78s infinite linear alternate-reverse;
}

.vhs-lmao::after {
  left: -2.5px;
  text-shadow: -2px 0 blue;
  animation: glitch 0.5s infinite linear alternate-reverse;
  animation-delay: 0.2s;
}

    .grey {
        background-color: #2f2f2f;
    }

    .blurbg {
        position: relative;
        z-index: 1;
        ruby-position: inter-character over;
        margin: auto -6px;
        padding: initial 5px;
        animation: glitch 0.7s infinite;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

        .blurbg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('../assets/specwf2.jpg');
            background-size: cover;
            filter: blur(15px);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: -1;
            left: 2px;
            text-shadow: -2px 0 red;
        }

        .blurbg::after {
            left: -2px;
            text-shadow: -2px 0 blue;
            animation-delay: 0.2s;
        }

    @keyframes glitch {
        0% {
            clip: rect(24px, 9999px, 44px, 0);
        }

        5% {
            clip: rect(72px, 9945px, 82px, 0);
        }

        10% {
            clip: rect(12px, 9999px, 112px, 0);
        }

        15% {
            clip: rect(82px, 9599px, 92px, 0);
        }

        20% {
            clip: rect(12px, 9999px, 42px, 0);
        }

        25% {
            clip: rect(52px, 9999px, 162px, 0);
        }

        30% {
            clip: rect(62px, 9229px, 72px, 0);
        }

        35% {
            clip: rect(24px, 9999px, 102px, 0);
        }

        40% {
            clip: rect(22px, 249px, 32px, 0);
        }

        45% {
            clip: rect(72px, 9999px, 142px, 0);
        }

        50% {
            clip: rect(562px, 9999px, 62px, 0);
        }

        55% {
            clip: rect(42px, 9999px, 889px, 0);
        }

        60% {
            clip: rect(32px, 925px, 42px, 0);
        }

        65% {
            clip: rect(922px, 9999px, 102px, 0);
        }

        70% {
            clip: rect(82px, 9999px, 222px, 0);
        }

        75% {
            clip: rect(12px, 92349px, 22px, 0);
        }

        80% {
            clip: rect(1px, 9999px, 82px, 0);
        }

        85% {
            clip: rect(52px, 3499px, 62px, 0);
        }

        90% {
            clip: rect(22px, 9999px, 142px, 0);
        }

        95% {
            clip: rect(222px, 9999px, 72px, 0);
        }

        100% {
            clip: rect(42px, 9249px, 52px, 0);
        }
    }

</style>
