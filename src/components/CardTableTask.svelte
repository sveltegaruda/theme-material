<script>
    let optionTask = "profile";
</script>

<div class="card">
    <div class="card-header card-header-tabs card-header-primary">
        <div class="nav-tabs-navigation">
            <div class="nav-tabs-wrapper">
                <span class="nav-tabs-title">Tasks:</span>
                <ul class="nav nav-tabs" data-tabs="tabs">
                    <li class="nav-item">
                        <a
                            href="#profile"
                            class="nav-link active"
                            data-toggle="tab"
                            on:click|preventDefault={() => (optionTask = 'profile')}>
                            <i class="material-icons">bug_report</i>
                            Bugs
                            <div class="ripple-container" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            href="#messages"
                            class="nav-link"
                            data-toggle="tab"
                            on:click|preventDefault={() => (optionTask = 'messages')}>
                            <i class="material-icons">code</i>
                            Website
                            <div class="ripple-container" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            href="#settings"
                            class="nav-link"
                            data-toggle="tab"
                            on:click|preventDefault={() => (optionTask = 'settings')}>
                            <i class="material-icons">cloud</i>
                            Server
                            <div class="ripple-container" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="tab-content">
            <div
                id="profile"
                class={optionTask === 'profile' ? 'tab-pane active' : 'tab-pane'}>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            checked />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Sign contract for "What are conference
                                organizers afraid of?"
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="" />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Lines From Great Russian Literature? Or E-mails
                                From My Boss?
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="" />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Flooded: One year later, assessing what was lost
                                and what was found when a ravaging rain swept
                                through metro Detroit
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            checked />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Create 4 Invisible User Experiences you Never
                                Knew About
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                id="messages"
                class={optionTask === 'messages' ? 'tab-pane active' : 'tab-pane'}>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            checked />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Flooded: One year later, assessing what was lost
                                and what was found when a ravaging rain swept
                                through metro Detroit
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="" />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Sign contract for "What are conference
                                organizers afraid of?"
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                id="settings"
                class={optionTask === 'settings' ? 'tab-pane active' : 'tab-pane'}>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="" />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Lines From Great Russian Literature? Or E-mails
                                From My Boss?
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            checked />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Flooded: One year later, assessing what was lost
                                and what was found when a ravaging rain swept
                                through metro Detroit
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            checked />
                                        <span class="form-check-sign">
                                            <span class="check" />
                                        </span>
                                    </label>
                                </div>
                            </td>
                            <td>
                                Sign contract for "What are conference
                                organizers afraid of?"
                            </td>
                            <td class="td-actions text-right">
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm">
                                    <i class="material-icons">edit</i>
                                </button>
                                <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
