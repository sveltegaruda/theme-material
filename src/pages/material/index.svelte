<script>
    import CardTableTask from "../../components/CardTableTask.svelte";
    import CardTableEmployee from "../../components/CardTableEmployee.svelte";

    let dataDailySalesChart = {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        series: [[12, 17, 7, 17, 23, 18, 38]],
    };

    let optionsDailySalesChart = {
        fullWidth: true,
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    };

    let dataWebsiteViewsChart = {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
    };

    let optionsWebsiteViewsChart = {
        axisX: {
            showGrid: false,
        },
        low: 0,
        high: 1000,
        chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
        },
    };

    let responsiveOptions = [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    },
                },
            },
        ],
    ];

    let dataCompletedTasksChart = {
        labels: ["12p", "3p", "6p", "9p", "12p", "3a", "6a", "9a"],
        series: [[230, 750, 450, 300, 280, 240, 200, 190]],
    };

    let optionsCompletedTasksChart = {
        fullWidth: true,
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    };

    let dailySalesChart;
    let websiteViewsChart;
    let completedTasksChart;

    const initializeChartist = () => {
        dailySalesChart = new window.Chartist.Line(
            document.getElementById("dailySalesChart"),
            dataDailySalesChart,
            optionsDailySalesChart
        );
        websiteViewsChart = new window.Chartist.Bar(
            document.getElementById("websiteViewsChart"),
            dataWebsiteViewsChart,
            optionsWebsiteViewsChart,
            responsiveOptions
        );
        completedTasksChart = new window.Chartist.Line(
            document.getElementById("completedTasksChart"),
            dataCompletedTasksChart,
            optionsCompletedTasksChart
        );
    };
</script>

<svelte:head>
    <script
        src="https://demos.creative-tim.com/material-dashboard/assets/js/plugins/chartist.min.js"
        on:load={initializeChartist}>
    </script>
</svelte:head>

<div class="row">
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                </div>
                <p class="card-category">Used Space</p>
                <h3 class="card-title">49/50 <small>GB</small></h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons text-danger">warning</i>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="#">Get More Space...</a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-success card-header-icon">
                <div class="card-icon"><i class="material-icons">store</i></div>
                <p class="card-category">Revenue</p>
                <h3 class="card-title">$34,245</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">date_range</i>
                    Last 24 Hours
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                    <i class="material-icons">info_outline</i>
                </div>
                <p class="card-category">Fixed Issues</p>
                <h3 class="card-title">75</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">local_offer</i>
                    Tracked from Github
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
                <div class="card-icon"><i class="fa fa-twitter" /></div>
                <p class="card-category">Followers</p>
                <h3 class="card-title">+245</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">update</i>
                    Just Updated
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-4">
        <div class="card card-chart">
            <div class="card-header card-header-success">
                <div class="ct-chart" id="dailySalesChart" />
            </div>
            <div class="card-body">
                <h4 class="card-title">Daily Sales</h4>
                <p class="card-category">
                    <span class="text-success"><i class="fa fa-long-arrow-up" />
                        55%
                    </span>
                    increase in today sales.
                </p>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">access_time</i>
                    updated 4 minutes ago
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-chart">
            <div class="card-header card-header-warning">
                <div class="ct-chart" id="websiteViewsChart" />
            </div>
            <div class="card-body">
                <h4 class="card-title">Email Subscriptions</h4>
                <p class="card-category">Last Campaign Performance</p>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">access_time</i>
                    campaign sent 2 days ago
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-chart">
            <div class="card-header card-header-danger">
                <div class="ct-chart" id="completedTasksChart" />
            </div>
            <div class="card-body">
                <h4 class="card-title">Completed Tasks</h4>
                <p class="card-category">Last Campaign Performance</p>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">access_time</i>
                    campaign sent 2 days ago
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-md-12">
        <CardTableTask />
    </div>

    <div class="col-lg-6 col-md-12">
        <CardTableEmployee />
    </div>
</div>
