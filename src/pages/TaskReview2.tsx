import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskReview2() {
  const navigate = useNavigate();
  const htmlContent = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
  
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=ABeeZee:ital,wght@0,400;1,400&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap"
      />
  
      <style>
        body {
          margin: 0;
          line-height: normal;
        }
      </style>
    </head>
    <body>
      <div
        style="
          position: relative;
          background-color: #fff;
          width: 100%;
          height: 1633px;
          overflow: hidden;
          text-align: left;
          font-size: 14px;
          color: #1d2129;
          font-family: ABeeZee;
        "
      >
        <div
          style="
            position: absolute;
            top: 60px;
            left: 0px;
            width: 258px;
            height: 992px;
            overflow: hidden;
            color: rgba(0, 0, 0, 0.88);
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/.svg"
          />
  
          <div
            style="
              position: absolute;
              height: 100%;
              width: 99.22%;
              top: 2.12%;
              right: 0.39%;
              bottom: -2.12%;
              left: 0.39%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <div
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                background-color: #fff;
                width: 256px;
                height: 40px;
                overflow: hidden;
                display: none;
                font-size: 16px;
              "
            >
              <img
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 256px;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 8px;
                  left: 24px;
                  line-height: 24px;
                "
              >
                WeDo
              </div>
            </div>
            <div
              style="
                position: absolute;
                top: 48px;
                left: 0px;
                width: 256px;
                height: 40px;
                overflow: hidden;
                opacity: 0.88;
                mix-blend-mode: normal;
                color: #1677ff;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/1.svg"
              />
  
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/bgfill1.svg"
              />
  
              <i
                style="
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 52px;
                  line-height: 22px;
                "
                >我的社区</i
              >
              <img
                style="
                  position: absolute;
                  top: calc(50% - 8px);
                  left: 24px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlineantdesign.svg"
              />
  
              <img
                style="
                  position: absolute;
                  top: calc(50% - 8px);
                  right: 16px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlineup.svg"
              />
            </div>
            <div
              style="
                position: absolute;
                top: 96px;
                left: 0px;
                background-color: #fff;
                width: 256px;
                height: 40px;
                overflow: hidden;
                display: none;
              "
            >
              <img
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 256px;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill2.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 52px;
                  line-height: 22px;
                "
              >
                创建社区
              </div>
            </div>
            <div
              style="
                position: absolute;
                top: 192px;
                left: 0px;
                background-color: #fff;
                width: 256px;
                height: 40px;
                overflow: hidden;
                display: none;
              "
            >
              <img
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 256px;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill3.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 52px;
                  line-height: 22px;
                "
              >
                任务大厅
              </div>
            </div>
            <div
              style="
                position: absolute;
                top: 240px;
                left: 0px;
                background-color: #fff;
                width: 256px;
                height: 40px;
                overflow: hidden;
                display: none;
              "
            >
              <img
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 256px;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill4.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 52px;
                  line-height: 22px;
                "
              >
                社区广场
              </div>
              <img
                style="
                  position: absolute;
                  top: 12px;
                  left: 24px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlineantdesign1.svg"
              />
  
              <img
                style="
                  position: absolute;
                  top: 12px;
                  left: 224px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlinedown.svg"
              />
            </div>
            <div
              style="
                position: absolute;
                top: 944px;
                left: 0px;
                background-color: #fff;
                width: 256px;
                height: 40px;
                overflow: hidden;
                display: none;
              "
            >
              <img
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 256px;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill5.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 52px;
                  line-height: 22px;
                "
              >
                使用入门
              </div>
              <img
                style="
                  position: absolute;
                  top: 12px;
                  left: 24px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  display: none;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlineantdesign2.svg"
              />
  
              <img
                style="
                  position: absolute;
                  top: 12px;
                  left: 224px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  display: none;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlinedown1.svg"
              />
            </div>
            <div
              style="
                position: absolute;
                top: 896px;
                left: 0px;
                background-color: #fff;
                width: 256px;
                height: 40px;
                overflow: hidden;
                display: none;
              "
            >
              <img
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 256px;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill6.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 52px;
                  line-height: 22px;
                "
              >
                全局设置
              </div>
              <img
                style="
                  position: absolute;
                  top: 12px;
                  left: 24px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  display: none;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlineantdesign3.svg"
              />
  
              <img
                style="
                  position: absolute;
                  top: 12px;
                  left: 224px;
                  width: 16px;
                  height: 16px;
                  overflow: hidden;
                  display: none;
                  opacity: 0.88;
                  mix-blend-mode: normal;
                "
                alt=""
                src="./public/iconlinedown2.svg"
              />
            </div>
            <img
              style="
                position: absolute;
                top: 0px;
                left: 255px;
                width: 1px;
                height: 992px;
              "
              alt=""
              src="./public/2.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 144px;
                left: 0px;
                width: 256px;
                height: 40px;
                overflow: hidden;
                display: none;
                color: #1677ff;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/3.svg"
              />
  
              <img
                style="
                  position: absolute;
                  width: 100%;
                  top: 0px;
                  right: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill7.svg"
              />
  
              <img
                style="
                  position: absolute;
                  top: 0px;
                  right: 0px;
                  width: 2px;
                  height: 40px;
                "
                alt=""
                src="./public/bgfill8.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 52px;
                  line-height: 22px;
                  display: inline-block;
                  width: 194px;
                "
              >
                治理事项
              </div>
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 26.25%;
              right: 0.78%;
              bottom: 69.72%;
              left: 0%;
              color: #1677ff;
            "
          >
            <img
              style="
                position: absolute;
                width: 100%;
                top: 0px;
                right: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                height: 40px;
              "
              alt=""
              src="./public/bgfill9.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                right: 0px;
                width: 2px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill10.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 9px;
                left: 52px;
                line-height: 22px;
                display: inline-block;
                width: 194px;
              "
            >
              二级菜单选中
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 41.1%;
              right: 0%;
              bottom: 54.86%;
              left: 0.78%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill11.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              社区漫游
            </div>
            <img
              style="
                position: absolute;
                top: 12px;
                left: 24px;
                width: 16px;
                height: 16px;
                overflow: hidden;
                opacity: 0.88;
                mix-blend-mode: normal;
              "
              alt=""
              src="./public/iconlineantdesign4.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 12px;
                left: 224px;
                width: 16px;
                height: 16px;
                overflow: hidden;
                opacity: 0.88;
                mix-blend-mode: normal;
              "
              alt=""
              src="./public/iconlinedown3.svg"
            />
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 31.2%;
              right: 1.55%;
              bottom: 64.77%;
              left: -0.78%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 2px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill12.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              任务互评
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 31.2%;
              right: 0%;
              bottom: 64.77%;
              left: 0.78%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill13.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              任务与角色互评
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 21.3%;
              right: 0.39%;
              bottom: 74.67%;
              left: 0.39%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill14.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              社区金库管理
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 46.06%;
              right: 0.39%;
              bottom: 49.91%;
              left: 0.39%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill15.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              社区广场
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 51.01%;
              right: 0.78%;
              bottom: 44.96%;
              left: 0%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill16.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              角色广场
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 36.15%;
              right: 0%;
              bottom: 59.82%;
              left: 0.78%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill17.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              NFT市场
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 16.34%;
              right: 1.16%;
              bottom: 79.62%;
              left: -0.39%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 1px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill18.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              社区角色卡管理
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 4.03%;
              width: 99.22%;
              top: 11.39%;
              right: 1.16%;
              bottom: 84.58%;
              left: -0.39%;
              background-color: #fff;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 1px;
                width: 256px;
                height: 40px;
              "
              alt=""
              src="./public/bgfill19.svg"
            />
  
            <div
              style="position: absolute; top: 9px; left: 52px; line-height: 22px"
            >
              Token发放
            </div>
          </div>
          <img
            style="
              position: absolute;
              top: 125px;
              left: 125px;
              width: 16px;
              height: 16px;
            "
            alt=""
            src="./public/jiangtan.svg"
          />
  
          <img
            style="
              position: absolute;
              top: 174px;
              left: 153px;
              width: 16px;
              height: 16px;
            "
            alt=""
            src="./public/jiangtan1.svg"
          />
  
          <img
            style="
              position: absolute;
              top: 223px;
              left: 141px;
              width: 16px;
              height: 16px;
            "
            alt=""
            src="./public/jiangtan2.svg"
          />
        </div>
        <div
          style="
            position: absolute;
            width: 17.78%;
            right: 80.97%;
            bottom: 17px;
            left: 1.25%;
            height: 40px;
            overflow: hidden;
            color: rgba(0, 0, 0, 0.88);
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/4.svg"
          />
  
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/bgfill20.svg"
          />
  
          <div
            style="
              position: absolute;
              top: calc(50% - 11px);
              left: 52px;
              line-height: 22px;
            "
          >
            使用入门
          </div>
          <img
            style="
              position: absolute;
              top: calc(50% - 8px);
              left: 24px;
              width: 16px;
              height: 16px;
              overflow: hidden;
              display: none;
              opacity: 0.88;
              mix-blend-mode: normal;
            "
            alt=""
            src="./public/iconlineantdesign5.svg"
          />
  
          <img
            style="
              position: absolute;
              top: calc(50% - 8px);
              right: 16px;
              width: 16px;
              height: 16px;
              overflow: hidden;
              display: none;
              opacity: 0.88;
              mix-blend-mode: normal;
            "
            alt=""
            src="./public/iconlinedown4.svg"
          />
        </div>
        <div
          style="
            position: absolute;
            top: 0px;
            left: 0px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            width: 1440px;
            height: 60px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/5.svg"
          />
  
          <div
            style="
              position: absolute;
              height: 166.67%;
              width: 6.94%;
              top: 0%;
              right: 93.06%;
              bottom: -66.67%;
              left: 0%;
            "
          ></div>
          <img
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 1440px;
              height: 60px;
            "
            alt=""
            src="./public/pageheader-backgroundmask.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 14px;
              left: 20px;
              width: 289px;
              height: 32px;
              overflow: hidden;
              font-size: 20px;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/6.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 140px;
                height: 32px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 32px;
                  height: 32px;
                  overflow: hidden;
                "
                alt=""
                src="./public/arco.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 2px;
                  left: 36px;
                  width: 104px;
                  height: 28px;
                "
              >
                <div
                  style="
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 104px;
                    height: 28px;
                    overflow: hidden;
                  "
                >
                  <img
                    style="
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    "
                    alt=""
                    src="./public/7.svg"
                  />
  
                  <div
                    style="
                      position: absolute;
                      top: calc(50% - 14px);
                      left: 0%;
                      line-height: 28px;
                    "
                  >
                    Wedo
                  </div>
                </div>
              </div>
            </div>
            <img
              style="
                position: absolute;
                top: 8px;
                left: 152px;
                width: 1px;
                height: 16px;
              "
              alt=""
              src="./public/rectangle-31.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 5px;
                left: 165px;
                font-size: 14px;
                line-height: 22px;
                font-family: Nunito;
                color: #86909c;
              "
            >
              Do it together!
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 60%;
              width: 7.36%;
              top: 20%;
              right: 3.61%;
              bottom: 20%;
              left: 89.03%;
              background-color: #fff;
              overflow: hidden;
              color: #4e5969;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 2px;
                width: 106px;
                height: 36px;
              "
              alt=""
              src="./public/8.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 2px;
                width: 106px;
                height: 36px;
              "
              alt=""
              src="./public/button-backgroundmask.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 12px;
                left: 20px;
                width: 12px;
                height: 12px;
                overflow: hidden;
                display: none;
              "
              alt=""
              src="./public/12px.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 7px;
                left: 40px;
                line-height: 22px;
                display: none;
              "
            >
              Default
            </div>
          </div>
          <div
            style="
              position: absolute;
              height: 28.33%;
              width: 3.89%;
              top: 35%;
              left: 91.88%;
              font-size: 12px;
              line-height: 17px;
              color: #000;
              display: inline-block;
            "
          >
            iShell
          </div>
          <div
            style="
              position: absolute;
              top: 11px;
              left: 1180px;
              width: 86px;
              height: 36px;
              overflow: hidden;
              text-align: right;
              color: #fff;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 86px;
                height: 36px;
                overflow: hidden;
              "
              alt=""
              src="./public/-true----false-false-false.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 22.22%;
                left: 17.44%;
                line-height: 22px;
              "
            >
              新建社区
            </div>
          </div>
          <img
            style="
              position: absolute;
              height: 33.33%;
              width: 1.39%;
              top: 31.67%;
              right: 8.89%;
              bottom: 35%;
              left: 89.72%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/dalle-20231129-161351--create-a-simple-abstract-logo-for-a-company-named-wedo-using-three-colors--0057fe-a-shade-of-blue-12d2ac-a-shade-of-teal-and-307af2-another-png.svg"
          />
  
          <img
            style="
              position: absolute;
              height: 26.67%;
              width: 1.11%;
              top: 41.67%;
              right: 4.24%;
              bottom: 31.67%;
              left: 94.65%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/9.svg"
          />
        </div>
        <div
          style="
            position: absolute;
            top: 1334px;
            left: 720px;
            width: 170px;
            height: 35px;
            overflow: hidden;
            font-size: 18px;
            color: #fff;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              border-radius: 4px;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/10.svg"
          />
  
          <div
            style="
              position: absolute;
              top: calc(50% - 12.5px);
              left: calc(50% - 35.5px);
              line-height: 25px;
            "
          >
            提交任务
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 129px;
            left: 354px;
            width: 47px;
            height: 47px;
            overflow: hidden;
            font-size: 20px;
            color: #fff;
          "
        >
          <img
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 100px;
              width: 47px;
              height: 47px;
            "
            alt=""
            src="./public/-1.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 10px;
              left: 13px;
              width: 24px;
              height: 27.21px;
            "
          >
            <img
              style="
                position: absolute;
                top: 10px;
                left: 13px;
                width: 14.84px;
                height: 27.21px;
              "
              alt=""
              src="./public/11.svg"
            />
  
            <i style="position: absolute; top: 0px; left: 0px; line-height: 27px"
              >01</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 674px;
            left: 354px;
            width: 47px;
            height: 47px;
            overflow: hidden;
            font-size: 20px;
            color: #fff;
          "
        >
          <img
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 100px;
              width: 47px;
              height: 47px;
            "
            alt=""
            src="./public/-11.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 10px;
              left: 13px;
              width: 24px;
              height: 27.21px;
            "
          >
            <img
              style="
                position: absolute;
                top: 10px;
                left: 13px;
                width: 14.84px;
                height: 27.21px;
              "
              alt=""
              src="./public/12.svg"
            />
  
            <i style="position: absolute; top: 0px; left: 0px; line-height: 27px"
              >02</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 140px;
            left: 421px;
            width: 160px;
            height: 27px;
            font-size: 20px;
            color: #000;
          "
        >
          <img
            style="
              position: absolute;
              top: 140px;
              left: 421px;
              width: 68px;
              height: 22px;
            "
            alt=""
            src="./public/13.svg"
          />
  
          <i style="position: absolute; top: 0px; left: 0px; line-height: 27px"
            >选择任务执行角色</i
          >
        </div>
        <div
          style="
            position: absolute;
            top: 685px;
            left: 421px;
            width: 120px;
            height: 27px;
            font-size: 20px;
            color: #000;
          "
        >
          <img
            style="
              position: absolute;
              top: 685px;
              left: 421px;
              width: 68px;
              height: 22px;
            "
            alt=""
            src="./public/14.svg"
          />
  
          <i style="position: absolute; top: 0px; left: 0px; line-height: 27px"
            >填写任务说明</i
          >
        </div>
        <img
          style="
            position: absolute;
            height: 6.8%;
            width: 8.68%;
            top: 11.82%;
            right: 62.71%;
            bottom: 81.38%;
            left: 28.61%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.8%;
            width: 8.68%;
            top: 20.78%;
            right: 62.71%;
            bottom: 72.42%;
            left: 28.61%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng1.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.8%;
            width: 8.68%;
            top: 30.25%;
            right: 62.71%;
            bottom: 62.95%;
            left: 28.61%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng2.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.8%;
            width: 8.68%;
            top: 11.82%;
            right: 34.67%;
            bottom: 81.38%;
            left: 56.65%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng3.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.8%;
            width: 8.68%;
            top: 20.78%;
            right: 34.67%;
            bottom: 72.42%;
            left: 56.65%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng4.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.8%;
            width: 8.68%;
            top: 30.25%;
            right: 34.67%;
            bottom: 62.95%;
            left: 56.65%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng5.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.92%;
            width: 8.19%;
            top: 11.82%;
            right: 53.5%;
            bottom: 81.26%;
            left: 38.31%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng6.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.92%;
            width: 8.19%;
            top: 20.9%;
            right: 53.5%;
            bottom: 72.18%;
            left: 38.31%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng7.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.92%;
            width: 8.19%;
            top: 30.37%;
            right: 53.5%;
            bottom: 62.71%;
            left: 38.31%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng8.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.92%;
            width: 8.19%;
            top: 11.82%;
            right: 25.46%;
            bottom: 81.26%;
            left: 66.35%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng9.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.92%;
            width: 8.19%;
            top: 20.9%;
            right: 25.46%;
            bottom: 72.18%;
            left: 66.35%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng10.svg"
        />
  
        <img
          style="
            position: absolute;
            height: 6.92%;
            width: 8.19%;
            top: 30.37%;
            right: 25.46%;
            bottom: 62.71%;
            left: 66.35%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          "
          alt=""
          src="./public/imagepng11.svg"
        />
  
        <div
          style="
            position: absolute;
            top: 309.67px;
            left: 425.5px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/15.svg"
          />
  
          <img
            style="
              position: absolute;
              top: 5px;
              left: 5px;
              width: 14px;
              height: 14px;
              overflow: hidden;
            "
            alt=""
            src="./public/basicchecked.svg"
          />
  
          <div
            style="position: absolute; top: 1px; left: 25px; line-height: 22px"
          >
            合约工程师
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 456px;
            left: 425.5px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/16.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/17.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 610.67px;
            left: 425.5px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/18.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/19.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault1.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 309.67px;
            left: 829.3px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/20.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/21.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault2.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 456px;
            left: 829.3px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/22.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/23.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault3.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 610.67px;
            left: 829.3px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/24.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/25.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault4.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 311.67px;
            left: 561.6px;
            width: 80px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/26.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/27.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault5.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 460px;
            left: 561.6px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/28.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/29.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault6.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 614.67px;
            left: 561.6px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/30.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/31.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault7.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 311.67px;
            left: 965.4px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/32.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/33.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault8.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 460px;
            left: 965.4px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/34.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/35.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault9.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 614.67px;
            left: 965.4px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/36.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/37.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault10.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 311.67px;
            left: 693.7px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/38.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/39.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault11.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 460px;
            left: 693.7px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/40.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/41.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault12.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 614.67px;
            left: 693.7px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/42.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/43.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault13.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 311.67px;
            left: 1097.5px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/44.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/45.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault14.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 460px;
            left: 1097.5px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/46.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/47.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault15.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 614.67px;
            left: 1097.5px;
            width: 98px;
            height: 24px;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/48.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 62px;
              height: 24px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/49.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 24px;
                height: 24px;
                overflow: hidden;
              "
              alt=""
              src="./public/basicdefault16.svg"
            />
  
            <i
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 25px;
                line-height: 22px;
                display: inline-block;
                width: 58px;
              "
              >Radio</i
            >
          </div>
        </div>
        <img
          style="
            position: absolute;
            top: 193px;
            left: 684.2px;
            border-radius: 10px;
            width: 117px;
            height: 113px;
          "
          alt=""
          src="./public/-2.svg"
        />
  
        <img
          style="
            position: absolute;
            top: 341.33px;
            left: 684.2px;
            border-radius: 10px;
            width: 117px;
            height: 113px;
          "
          alt=""
          src="./public/-21.svg"
        />
  
        <img
          style="
            position: absolute;
            top: 496px;
            left: 684.2px;
            border-radius: 10px;
            width: 117px;
            height: 113px;
          "
          alt=""
          src="./public/-22.svg"
        />
  
        <img
          style="
            position: absolute;
            top: 193px;
            left: 1088px;
            border-radius: 10px;
            width: 117px;
            height: 113px;
          "
          alt=""
          src="./public/-23.svg"
        />
  
        <img
          style="
            position: absolute;
            top: 341.33px;
            left: 1088px;
            border-radius: 10px;
            width: 117px;
            height: 113px;
          "
          alt=""
          src="./public/-24.svg"
        />
  
        <img
          style="
            position: absolute;
            top: 496px;
            left: 1088px;
            border-radius: 10px;
            width: 117px;
            height: 113px;
          "
          alt=""
          src="./public/-25.svg"
        />
  
        <div
          style="
            position: absolute;
            top: 907px;
            left: 421px;
            width: 320px;
            height: 36px;
            overflow: hidden;
            color: #86909c;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/50.svg"
          />
  
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/-background.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 320px;
              height: 36px;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 320px;
                height: 36px;
              "
              alt=""
              src="./public/51.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 2px;
                width: 320px;
                height: 36px;
              "
              alt=""
              src="./public/main-background.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 320px;
                height: 36px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/52.svg"
              />
  
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/53.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 7px;
                  left: 10px;
                  width: 181px;
                  height: 22px;
                  overflow: hidden;
                  display: none;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/54.svg"
                />
  
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/55.svg"
                />
  
                <img
                  style="
                    position: absolute;
                    height: calc(100% - 6px);
                    width: 8.84%;
                    top: 3px;
                    right: 91.16%;
                    bottom: 3px;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    display: none;
                  "
                  alt=""
                  src="./public/16px.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: calc(50% - 11px);
                    left: 28px;
                    line-height: 22px;
                  "
                >
                  任务资料URL
                </div>
              </div>
              <img
                style="
                  position: absolute;
                  height: calc(100% - 20px);
                  width: calc(100% - 304px);
                  top: 10px;
                  right: 10px;
                  bottom: 10px;
                  left: 294px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  display: none;
                "
                alt=""
                src="./public/frame-2820.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 6px;
                  width: 232px;
                  height: 20px;
                  color: #000;
                "
              >
                <img
                  style="
                    position: absolute;
                    top: 9px;
                    left: 6px;
                    width: 232px;
                    height: 20px;
                  "
                  alt=""
                  src="./public/56.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    line-height: 19px;
                  "
                >
                  相关内容URL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 743px;
            left: 421px;
            width: 320px;
            height: 36px;
            overflow: hidden;
            color: #86909c;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/57.svg"
          />
  
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/-background1.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 320px;
              height: 36px;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 320px;
                height: 36px;
              "
              alt=""
              src="./public/58.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 2px;
                width: 320px;
                height: 36px;
              "
              alt=""
              src="./public/main-background1.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 320px;
                height: 36px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/59.svg"
              />
  
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/60.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 7px;
                  left: 10px;
                  width: 181px;
                  height: 22px;
                  overflow: hidden;
                  display: none;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/61.svg"
                />
  
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/62.svg"
                />
  
                <img
                  style="
                    position: absolute;
                    height: calc(100% - 6px);
                    width: 8.84%;
                    top: 3px;
                    right: 91.16%;
                    bottom: 3px;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    display: none;
                  "
                  alt=""
                  src="./public/16px1.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: calc(50% - 11px);
                    left: 28px;
                    line-height: 22px;
                  "
                >
                  任务资料URL
                </div>
              </div>
              <img
                style="
                  position: absolute;
                  height: calc(100% - 20px);
                  width: calc(100% - 304px);
                  top: 10px;
                  right: 10px;
                  bottom: 10px;
                  left: 294px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  display: none;
                "
                alt=""
                src="./public/frame-28201.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 6px;
                  width: 232px;
                  height: 20px;
                  color: #000;
                "
              >
                <img
                  style="
                    position: absolute;
                    top: 9px;
                    left: 6px;
                    width: 232px;
                    height: 20px;
                  "
                  alt=""
                  src="./public/63.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    line-height: 19px;
                  "
                >
                  任务名
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 793px;
            left: 421px;
            width: 478px;
            height: 100px;
            overflow: hidden;
            color: #000;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/64.svg"
          />
  
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/-background2.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 474px;
              height: 100px;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 478px;
                height: 100px;
              "
              alt=""
              src="./public/65.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 2px;
                width: 478px;
                height: 100px;
              "
              alt=""
              src="./public/main-background2.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 478px;
                height: 100px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/66.svg"
              />
  
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/67.svg"
              />
  
              <img
                style="
                  position: absolute;
                  height: calc(100% - 20px);
                  width: calc(100% - 304px);
                  top: 10px;
                  right: 10px;
                  bottom: 10px;
                  left: 294px;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  display: none;
                "
                alt=""
                src="./public/frame-28202.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: 9px;
                  left: 9px;
                  width: 266px;
                  height: 27px;
                "
              >
                <img
                  style="
                    position: absolute;
                    top: 9px;
                    left: 9px;
                    width: 232px;
                    height: 27px;
                  "
                  alt=""
                  src="./public/68.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    line-height: 19px;
                  "
                >
                  输入任务介绍，越清晰越容易获得有效评价
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 1120px;
            left: 1829px;
            width: 255px;
            height: 36px;
            overflow: hidden;
            color: #86909c;
            font-family: Nunito;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/69.svg"
          />
  
          <img
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 2px;
              width: 255px;
              height: 36px;
            "
            alt=""
            src="./public/timepicker-background.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 255px;
              height: 36px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/70.svg"
            />
  
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                border-radius: 2px;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/inner-backgroundmask.svg"
            />
  
            <div
              style="
                position: absolute;
                top: calc(50% - 18px);
                left: 0px;
                width: 80px;
                height: 36px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/71.svg"
              />
  
              <img
                style="
                  position: absolute;
                  height: 44.44%;
                  width: 1.25%;
                  top: 27.78%;
                  right: 83.75%;
                  bottom: 27.78%;
                  left: 15%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  display: none;
                "
                alt=""
                src="./public/72.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 12px;
                  line-height: 22px;
                "
              >
                开始日期
              </div>
            </div>
            <div
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: calc(50% - 29.5px);
                width: 100px;
                height: 22px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/73.svg"
              />
  
              <img
                style="
                  position: absolute;
                  top: 10px;
                  left: 12px;
                  border-radius: 3px;
                  width: 8px;
                  height: 2px;
                "
                alt=""
                src="./public/rectangle-139.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 32px;
                  line-height: 22px;
                "
              >
                结束日期
              </div>
            </div>
            <img
              style="
                position: absolute;
                width: calc(100% - 197px);
                top: calc(50% - 8px);
                right: 0px;
                left: 197px;
                max-width: 100%;
                overflow: hidden;
                height: 16px;
              "
              alt=""
              src="./public/frame-2223.svg"
            />
          </div>
          <div
            style="
              position: absolute;
              top: 36px;
              left: 0px;
              width: 255px;
              height: 0px;
              font-size: 12px;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 255px;
                height: 0px;
              "
              alt=""
              src="./public/74.svg"
            />
  
            <img
              style="
                position: absolute;
                top: -6552px;
                left: -1162px;
                width: 255px;
                height: 0px;
              "
              alt=""
              src="./public/magic-frame-background.svg"
            />
  
            <div
              style="
                position: absolute;
                top: -6552px;
                left: -1162px;
                width: 72px;
                height: 40px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/75.svg"
              />
  
              <div
                style="
                  position: absolute;
                  height: 50%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 50%;
                  left: 0%;
                  overflow: hidden;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/76.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0%;
                    left: 0px;
                    line-height: 20px;
                  "
                >
                  校验文本
                </div>
              </div>
              <div
                style="
                  position: absolute;
                  height: calc(100% - 20px);
                  width: 100%;
                  top: 0px;
                  right: 0%;
                  bottom: 20px;
                  left: 0%;
                  overflow: hidden;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/77.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0%;
                    left: 0px;
                    line-height: 20px;
                  "
                >
                  提示文本
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 1120px;
            left: 1569px;
            width: 240px;
            height: 36px;
            overflow: hidden;
            color: #86909c;
            font-family: Nunito;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/78.svg"
          />
  
          <img
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 2px;
              width: 240px;
              height: 36px;
            "
            alt=""
            src="./public/timepickermain-background.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 240px;
              height: 36px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/79.svg"
            />
  
            <div
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: 12px;
                line-height: 22px;
              "
            >
              请选择日期
            </div>
            <img
              style="
                position: absolute;
                top: 10px;
                left: 194px;
                width: 36px;
                height: 16px;
                overflow: hidden;
              "
              alt=""
              src="./public/icons.svg"
            />
          </div>
          <div
            style="
              position: absolute;
              top: 36px;
              left: 0px;
              width: 240px;
              height: 0px;
              font-size: 12px;
            "
          >
            <img
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 240px;
                height: 0px;
              "
              alt=""
              src="./public/80.svg"
            />
  
            <img
              style="
                position: absolute;
                top: -6552px;
                left: -902px;
                width: 240px;
                height: 0px;
              "
              alt=""
              src="./public/magic-frame-background1.svg"
            />
  
            <div
              style="
                position: absolute;
                top: -6552px;
                left: -902px;
                width: 72px;
                height: 40px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/81.svg"
              />
  
              <div
                style="
                  position: absolute;
                  height: 50%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 50%;
                  left: 0%;
                  overflow: hidden;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/82.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0%;
                    left: 0px;
                    line-height: 20px;
                  "
                >
                  校验文本
                </div>
              </div>
              <div
                style="
                  position: absolute;
                  height: calc(100% - 20px);
                  width: 100%;
                  top: 0px;
                  right: 0%;
                  bottom: 20px;
                  left: 0%;
                  overflow: hidden;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/83.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    line-height: 20px;
                  "
                >
                  提示文本
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 957px;
            left: 421px;
            width: 255px;
            height: 36px;
            overflow: hidden;
            color: #86909c;
            font-family: Nunito;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/84.svg"
          />
  
          <img
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 2px;
              width: 255px;
              height: 36px;
            "
            alt=""
            src="./public/timepicker-background1.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              width: 255px;
              height: 36px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/85.svg"
            />
  
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                border-radius: 2px;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/inner-backgroundmask1.svg"
            />
  
            <div
              style="
                position: absolute;
                top: calc(50% - 18px);
                left: 0px;
                width: 80px;
                height: 36px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/86.svg"
              />
  
              <img
                style="
                  position: absolute;
                  height: 44.44%;
                  width: 1.25%;
                  top: 27.78%;
                  right: 83.75%;
                  bottom: 27.78%;
                  left: 15%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  display: none;
                "
                alt=""
                src="./public/87.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 12px;
                  line-height: 22px;
                "
              >
                开始日期
              </div>
            </div>
            <div
              style="
                position: absolute;
                top: calc(50% - 11px);
                left: calc(50% - 29.5px);
                width: 100px;
                height: 22px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/88.svg"
              />
  
              <img
                style="
                  position: absolute;
                  top: 10px;
                  left: 12px;
                  border-radius: 3px;
                  width: 8px;
                  height: 2px;
                "
                alt=""
                src="./public/rectangle-1391.svg"
              />
  
              <div
                style="
                  position: absolute;
                  top: calc(50% - 11px);
                  left: 32px;
                  line-height: 22px;
                "
              >
                结束日期
              </div>
            </div>
            <img
              style="
                position: absolute;
                width: calc(100% - 197px);
                top: calc(50% - 8px);
                right: 0px;
                left: 197px;
                max-width: 100%;
                overflow: hidden;
                height: 16px;
              "
              alt=""
              src="./public/frame-22231.svg"
            />
          </div>
          <div
            style="
              position: absolute;
              top: 36px;
              left: 0px;
              width: 255px;
              height: 0px;
              font-size: 12px;
            "
          >
            <img
              style="
                position: absolute;
                top: 36px;
                left: 0px;
                width: 255px;
                height: 0px;
              "
              alt=""
              src="./public/89.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 36px;
                left: 0px;
                width: 255px;
                height: 0px;
              "
              alt=""
              src="./public/magic-frame-background2.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                width: 72px;
                height: 40px;
                overflow: hidden;
              "
            >
              <img
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                "
                alt=""
                src="./public/90.svg"
              />
  
              <div
                style="
                  position: absolute;
                  height: 50%;
                  width: 100%;
                  top: 0%;
                  right: 0%;
                  bottom: 50%;
                  left: 0%;
                  overflow: hidden;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/91.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0%;
                    left: 12px;
                    line-height: 20px;
                  "
                >
                  校验文本
                </div>
              </div>
              <div
                style="
                  position: absolute;
                  height: calc(100% - 20px);
                  width: 100%;
                  top: 20px;
                  right: 0%;
                  bottom: 0px;
                  left: 0%;
                  overflow: hidden;
                "
              >
                <img
                  style="
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  "
                  alt=""
                  src="./public/92.svg"
                />
  
                <div
                  style="
                    position: absolute;
                    top: 0%;
                    left: 12px;
                    line-height: 20px;
                  "
                >
                  提示文本
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 1007px;
            left: 421px;
            width: 100px;
            height: 100px;
            overflow: hidden;
            text-align: center;
            color: #4e5969;
          "
        >
          <img
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 2px;
              width: 100px;
              height: 100px;
            "
            alt=""
            src="./public/upload--background.svg"
          />
  
          <div
            style="
              position: absolute;
              top: 32px;
              left: 28px;
              width: 45px;
              height: 46px;
              overflow: hidden;
            "
          >
            <img
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              "
              alt=""
              src="./public/93.svg"
            />
  
            <img
              style="
                position: absolute;
                top: 0px;
                left: 14.5px;
                width: 16px;
                height: 16px;
                overflow: hidden;
              "
              alt=""
              src="./public/16pxiconminus.svg"
            />
  
            <div
              style="
                position: absolute;
                top: 24px;
                left: -17px;
                line-height: 22px;
                display: inline-block;
                width: 81px;
              "
            >
              附件
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            height: 2.2%;
            width: 25%;
            top: 68.4%;
            right: 45.76%;
            bottom: 29.39%;
            left: 29.24%;
            overflow: hidden;
          "
        >
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/94.svg"
          />
  
          <img
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              border-radius: 2px;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            "
            alt=""
            src="./public/upoadlistitems-background.svg"
          />
  
          <img
            style="
              position: absolute;
              width: calc(100% - 344px);
              top: calc(50% - 10px);
              right: 332px;
              left: 12px;
              max-width: 100%;
              overflow: hidden;
              height: 20px;
            "
            alt=""
            src="./public/uploadfileiconword.svg"
          />
  
          <i
            style="
              position: absolute;
              top: calc(50% - 11px);
              left: 40px;
              line-height: 22px;
            "
            >employeelist.doc</i
          >
          <img
            style="
              position: absolute;
              top: calc(50% - 8px);
              right: 12px;
              width: 16px;
              height: 16px;
              overflow: hidden;
            "
            alt=""
            src="./public/uploadprogressdefault.svg"
          />
  
          <img
            style="
              position: absolute;
              width: calc(100% - 348px);
              top: calc(50% - 5px);
              right: -24px;
              left: 372px;
              max-width: 100%;
              overflow: hidden;
              height: 12px;
            "
            alt=""
            src="./public/12px1.svg"
          />
        </div>
      </div>
    </body>
  </html>
  `;

  // Adding type annotation for useRef
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TypeScript understands containerRef.current is a HTMLDivElement or null
    if (containerRef.current) {
    const interactiveDiv = containerRef.current.querySelector<HTMLDivElement>('.frame-XUB-20');
    if (interactiveDiv) {
        interactiveDiv.addEventListener('click', () => {
        console.log('Div clicked!');
        navigate('/');
        // You can add more interactive functionality here
        });
    }
    }
  }, []);

  return (
    <div
    ref={containerRef}
    dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}